"""app.js আর brain.js এর সব বাংলা লাইন থেকে বাবার পুরুষ কণ্ঠের ভয়েস (MP3) বানায়।
চালাও:  python tools/make_voice.py   (লাগবে: pip install edge-tts)
নতুন ভয়েস/গলা চাইলে নিচের VOICE / RATE / PITCH বদলে আবার চালাও (পুরনো mp3 নিজেই মুছে যাবে)।
"""
import asyncio, hashlib, json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
import edge_tts

VOICE = "bn-BD-PradeepNeural"   # বাংলাদেশি পুরুষ কণ্ঠ (অন্যটা: bn-IN-BashkarNeural)
RATE = "-15%"                   # ধীরে ধীরে, গুরুর মতো
PITCH = "-12Hz"                 # মোটা গলা

# TTS যেসব শব্দ ভুল উচ্চারণ করে, শুধু ভয়েসের জন্য বানান বদলাও (লেখায় আগেরটাই থাকে)
PRONOUNCE = {
    "বৎস": "বত্‌শো",   # "বট-স" না, "বত-শো"
}

def spoken(t):
    for k, v in PRONOUNCE.items():
        t = t.replace(k, v)
    return t

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRCS = [os.path.join(ROOT, "assets", "js", f) for f in ("app.js", "brain.js")]
OUT = os.path.join(ROOT, "assets", "audio")
os.makedirs(OUT, exist_ok=True)

EMOJI = re.compile("[\U0001F000-\U0001FFFF⌀-⏿☀-➿⬀-⯿️‍]")

def clean(s):  # app.js এর voiceKey() এর সাথে হুবহু মিল থাকতে হবে
    return re.sub(r"\s+", " ", EMOJI.sub("", s)).strip()

js = "\n".join(open(f, encoding="utf-8").read() for f in SRCS)
STRING = re.compile(r'"((?:[^"\\\n]|\\.)*)"')
texts = sorted({clean(m) for m in STRING.findall(js)
                if re.search("[ঀ-৿]", m) and len(clean(m)) >= 16})  # ছোট কীওয়ার্ড/লেবেল বাদ — বাবা শুধু পুরো বাক্য বলেন

sem = asyncio.Semaphore(3)

async def make(t):
    say = spoken(t)
    name = hashlib.md5(f"{VOICE}{RATE}{PITCH}{say}".encode("utf-8")).hexdigest()[:12] + ".mp3"
    path = os.path.join(OUT, name)
    if not os.path.exists(path):
        async with sem:
            for attempt in range(5):
                try:
                    await edge_tts.Communicate(say, VOICE, rate=RATE, pitch=PITCH).save(path)
                    break
                except Exception as e:
                    if os.path.exists(path):
                        os.remove(path)
                    if attempt == 4:
                        print("FAILED:", t, "-", type(e).__name__)
                        return t, None
                    await asyncio.sleep(2 + attempt * 2)
    return t, name

async def main():
    manifest = {t: n for t, n in await asyncio.gather(*(make(t) for t in texts)) if n}
    keep = set(manifest.values())
    for f in os.listdir(OUT):  # পুরনো ফাইল মুছে ফেলো
        if f.endswith(".mp3") and f not in keep:
            os.remove(os.path.join(OUT, f))
    with open(os.path.join(OUT, "voice.js"), "w", encoding="utf-8") as fh:
        fh.write("window.BABA_VOICE = " + json.dumps(manifest, ensure_ascii=False, indent=0) + ";\n")
    print(len(manifest), "voice lines ready")

asyncio.run(main())
