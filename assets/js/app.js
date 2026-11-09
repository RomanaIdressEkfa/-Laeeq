/* ====================================================
   ভন্ড লেংটা বাবা Laeeq — দরবারের সমস্ত কারসাজি এখানে
   ==================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const bn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  const bnNum = (n) => bn(n.toLocaleString("en-IN"));

  const BABA_AVATAR = "assets/img/baba-head.jpg";

  /* ---------------- ডাটা: সমস্যা ও সমাধান ---------------- */
  const PROBLEMS = [
    {
      id: "love", em: "💔", label: "প্রেম / ক্রাশ পাত্তা দেয় না",
      answers: [
        "বৎস, ক্রাশ পাত্তা দেয় না কারণ তোমার শুক্র গ্রহ এখন ওয়াই-ফাই ছাড়া চলছে। আগে নিজের ডাটা প্যাক রিচার্জ করো।",
        "শোনো বৎস, যে তোমাকে সিন করে রিপ্লাই দেয় না — সে তোমার ভবিষ্যৎ না, সে তোমার শিক্ষা। শিক্ষা নাও, ফি দাও বাবাকে।",
        "আমি ধ্যানে দেখলাম… তোমার ক্রাশ অন্য কারো ক্রাশ, আর সেই লোক আবার আমার ভক্ত। দুনিয়া গোল বৎস, গোল!",
      ],
      totka: [
        "প্রতি শুক্রবার ক্রাশের স্টোরিতে 🔥 রিয়্যাক্ট দেবে, কিন্তু ১৩ সেকেন্ড দেরিতে। রহস্য তৈরি হবে।",
        "বালিশের নিচে একটা চার্জার রাখো — সম্পর্কও চার্জ থাকবে।",
        "তিন দিন কোনো মেসেজ দিবে না। চতুর্থ দিনে শুধু লিখবে “হুম”। বাকিটা বাবা দেখবেন।",
      ],
      followups: [
        { em: "📵", label: "বাবা, সে তো ব্লক করে দিয়েছে!", answer: "ব্লক মানে তোমাকে মনে রাখতে বাধ্য হয়েছে বৎস! নইলে আনফ্রেন্ড করতো। এটা অগ্রগতি। 📈" },
        { em: "👫", label: "বাবা, সে আমাকে “ভাই” ডেকেছে…", answer: "আহা! ভাই-জোন হলো প্রেমের ওয়েটিং রুম। আমি নিজেও স্টেশনে এভাবে ১২ বছর বসে ছিলাম। ধৈর্য ধরো। 🪑" },
        { em: "💍", label: "বাবা, তার বিয়ে ঠিক হয়ে গেছে!", answer: "চিন্তা নাই বৎস, বিয়েতে যাও, ভরপেট বিরিয়ানি খাও। প্রেম গেলো, কিন্তু রোস্ট যেন না যায়। 🍗" },
      ],
    },
    {
      id: "exam", em: "📚", label: "পড়া মনে থাকে না / পরীক্ষায় ফেল",
      answers: [
        "বৎস, পড়া মনে থাকে না কারণ তোমার ব্রেইনের স্টোরেজ মিম আর রিলস দিয়ে ফুল। কিছু ডিলিট করো, আগে বাবার মিম বাদে।",
        "পরীক্ষায় ফেল করা কোনো ব্যাপার না। আমি নিজে জীবনে কোনো পরীক্ষা দেই নাই, আজ আমি বাবা! 🧘",
        "ধ্যানে দেখলাম — তোমার প্রশ্নপত্র আর তোমার পড়া আলাদা আলাদা গ্যালাক্সিতে থাকে। মিলন অসম্ভব।",
      ],
      totka: [
        "বইটা মাথার নিচে দিয়ে ঘুমাও। জ্ঞান অভিকর্ষের টানে নিচ থেকে উপরে উঠবে।",
        "পরীক্ষার হলে ঢোকার আগে তিনবার বলো “কমন পড়বে, কমন পড়বে, কমন পড়বে”।",
        "প্রতিদিন ১ পৃষ্ঠা পড়ো, ২ ঘণ্টা ঘুমাও — বাবার “১:১২০” মেথড।",
      ],
      followups: [
        { em: "🧮", label: "বাবা, অংক একদম পারি না", answer: "আমিও পারি না বৎস। দক্ষিণার হিসাবও ক্যালকুলেটরে করি। দুনিয়া চলছে, তুমিও চলবে। ➕➖" },
        { em: "😭", label: "বাবা, রেজাল্ট দেখে আব্বু রেগে আছে", answer: "আব্বুকে বলো “বাবা Laeeq বলেছেন রেজাল্ট দিয়ে মানুষ চেনা যায় না”। তারপর দৌড় দিও। 🏃" },
      ],
    },
    {
      id: "job", em: "💼", label: "চাকরি পাচ্ছি না",
      answers: [
        "বৎস, চাকরি তোমাকে খুঁজছে, কিন্তু তুমি লিংকডইনে প্রোফাইল পিক দিয়েছো বিয়েবাড়ির সেলফি। চাকরি ভয় পেয়ে পালাচ্ছে।",
        "আমিও একসময় ব্লেজার পরে চাকরি খুঁজতাম। এখন দেখো — পাগড়ি পরে ভন্ডামি করি, ইনকাম বেশি, বস নাই! 😎",
        "তোমার বৃহস্পতি এখন “Experience Required: 5 years” অবস্থানে আছে। ফ্রেশারদের জন্য গ্রহ সদয় না।",
      ],
      totka: [
        "সিভিতে “বাবা Laeeq এর আশীর্বাদপ্রাপ্ত” লিখে দাও। HR নিজেই কনফিউজড হয়ে ডাকবে।",
        "ইন্টারভিউতে “আপনার দুর্বলতা কী?” — বলবে “বিরিয়ানি”। সৎ উত্তরে সবাই মুগ্ধ।",
        "প্রতি সোমবার সকালে চা খাওয়ার আগে ১০টা আবেদন। চা খাওয়ার পর আরো ১০টা।",
      ],
      followups: [
        { em: "📞", label: "বাবা, ইন্টারভিউ দিলাম কিন্তু কল আসে না", answer: "“We will call you” মানে ওরা তোমাকে পরের জন্মে কল দেবে বৎস। ততদিন আমার শিষ্য হয়ে যাও। 🙏" },
        { em: "💰", label: "বাবা, স্যালারি খুব কম দিতে চায়", answer: "কম স্যালারি নিয়ে মন খারাপ? আমার আশ্রমে স্যালারিই নাই, শুধু খিচুড়ি। তুলনা করে দেখো। 🍲" },
      ],
    },
    {
      id: "money", em: "💸", label: "পকেটে টাকা থাকে না",
      answers: [
        "বৎস, তোমার মানিব্যাগে একটা ফুটো আছে, নাম তার “ফুডপান্ডা”। আগে ওটা সেলাই করো।",
        "টাকা থাকে না কারণ টাকা চঞ্চল, আর তুমি তার চেয়েও চঞ্চল। দুজনে মিল হয় না।",
        "ধ্যানে দেখলাম, তোমার টাকা মাসের ৫ তারিখে আসে আর ৬ তারিখে বিদায় নেয়। এটা টাকা না বৎস, অতিথি।",
      ],
      totka: [
        "মানিব্যাগে বাবার ছবি রাখো। খরচ করতে গেলে বাবার রাগী চোখ দেখে হাত কাঁপবে। 👀",
        "প্রতিদিন ১০ টাকা মাটির ব্যাংকে রাখো। মাস শেষে ব্যাংক ভেঙে বাবাকে দক্ষিণা দাও।",
        "“সেল” শব্দটা দেখলে চোখ বন্ধ করে তিনবার “ওম শান্তি” বলো।",
      ],
      followups: [
        { em: "🏦", label: "বাবা, লোন নিয়ে ফেলেছি", answer: "লোন হলো ভবিষ্যতের তুমির কাছ থেকে চুরি করা টাকা। ভবিষ্যতের তুমিকে আমার পক্ষ থেকে সমবেদনা। 😔" },
        { em: "🎰", label: "বাবা, লটারি লাগবে কবে?", answer: "লটারি লাগবে যেদিন তুমি টিকিট কাটবে, আর নাম্বারটা আমি বলে দিবো। কিন্তু নাম্বার জানলে আমি নিজেই কাটতাম, তাই না? 🤔" },
      ],
    },
    {
      id: "weight", em: "🍔", label: "ওজন কমে না",
      answers: [
        "বৎস, ওজন কমে না কারণ তুমি “কাল থেকে ডায়েট” বলো, আর কাল কখনো আসে না। কাল আমারও আসে নাই।",
        "আমার দিকে দেখো — শুধু লুঙ্গি আর দাড়ি, তবু পেট আছে। ওজন হলো মায়া বৎস, মায়া।",
        "ধ্যানে দেখলাম, তোমার ফ্রিজ তোমাকে রাত ২টায় ডাকে। ফ্রিজের সাথে সম্পর্ক ছিন্ন করো।",
      ],
      totka: [
        "খাওয়ার আগে আয়নায় নিজেকে দেখো। ক্ষুধা ৫০% কমে যাবে।",
        "বিরিয়ানি খাওয়ার সময় চোখ বন্ধ রাখো — যা দেখা যায় না, তার ক্যালোরিও নাই। (বাবার নিজস্ব বিজ্ঞান)",
        "প্রতিদিন সকালে ৫ বার পদ্মাসনে বসো আর উঠো। ২য় দিনে আর উঠতে পারবে না, তাই খাবার আনতেও যাবে না।",
      ],
      followups: [
        { em: "🏋️", label: "বাবা, জিমে ভর্তি হয়েছি", answer: "অভিনন্দন বৎস! জিমে ভর্তি হওয়া আর জিমে যাওয়া — দুইটা আলাদা সাধনা। প্রথমটায় তুমি সফল। 🏅" },
        { em: "🍕", label: "বাবা, পিৎজা ছাড়তে পারছি না", answer: "ছাড়তে হবে না। পিৎজা গোল, পৃথিবীও গোল — পিৎজা খাওয়া মানে পৃথিবীকে ভালোবাসা। শুধু আমাকে এক স্লাইস পাঠিও। 🍕" },
      ],
    },
    {
      id: "sleep", em: "😴", label: "সকালে ঘুম ভাঙে না",
      answers: [
        "বৎস, সকালে ঘুম ভাঙবে কিভাবে? তুমি রাত ৩টা পর্যন্ত রিলস দেখো, তারপর বলো “আর একটা”। ৪৭টা পরে ঘুমাও।",
        "সকাল হলো দুনিয়ার ষড়যন্ত্র। বাবা নিজেও দুপুর ১২টার আগে ধ্যানে বসেন না। 🛌",
        "তোমার অ্যালার্মের স্নুজ বাটনের সাথে তোমার আত্মার যোগ আছে। এটা আধ্যাত্মিক সমস্যা।",
      ],
      totka: [
        "অ্যালার্ম ঘড়ি রান্নাঘরে রাখো। বন্ধ করতে গেলে চা-ও বানানো হয়ে যাবে।",
        "ঘুমানোর আগে মোবাইলকে বলো “শুভরাত্রি”, তারপর অন্য রুমে রেখে আসো। বিচ্ছেদ কষ্টের, কিন্তু জরুরি।",
        "অ্যালার্মের সাউন্ড বদলে বাবার “উঠো বৎস!!” রেকর্ড করো।",
      ],
      followups: [
        { em: "⏰", label: "বাবা, ১০টা অ্যালার্ম দিয়েও উঠি না", answer: "তাহলে ১১টা দাও বৎস। আর না উঠলে বুঝবে তুমি আসলে সাধক — দুনিয়ার কোলাহল তোমাকে স্পর্শ করে না। 🧘" },
      ],
    },
    {
      id: "marriage", em: "👰", label: "বিয়ে হচ্ছে না / বাসায় দিচ্ছে না",
      answers: [
        "বৎস, বাসায় বিয়ে দিচ্ছে না কারণ তোমার আম্মু এখনো তোমাকে ৫ বছরের বাচ্চা ভাবে। তুমি নিজের কাপড় নিজে ধুয়ে প্রমাণ দাও।",
        "বিয়ের লগ্ন আমি দেখেছি… আসছে বছরের পরের বছরের পরের বছর। ধৈর্য ধরো। ⏳",
        "আগে চাকরি, তারপর বিয়ে — এটাই নিয়ম। আর চাকরির জন্য উপরের অপশনটা দেখো। সব সমস্যা পরস্পর যুক্ত বৎস!",
      ],
      totka: [
        "প্রতিদিন আম্মুর সামনে ১ বার বলো “আমি এখন অনেক ম্যাচিউর”। তারপর ভাত খাওয়ার সময় ঝোল ফেলবে না।",
        "বিয়েবাড়িতে গিয়ে সবার আগে খাবার লাইনে দাঁড়াবে না। মুরুব্বিরা খেয়াল করেন।",
        "আত্মীয়দের সামনে বলবে “আমি তো সংসারী মানুষ”। ৩ মাসের মধ্যে প্রস্তাব আসবে। (গ্যারান্টি নাই)",
      ],
      followups: [
        { em: "👵", label: "বাবা, আত্মীয়রা খালি জিজ্ঞেস করে “কবে বিয়ে?”", answer: "উল্টো জিজ্ঞেস করো “আপনার ছেলের চাকরি কবে হবে?” — আলোচনা সেখানেই শেষ। ⚔️" },
        { em: "📸", label: "বাবা, বায়োডাটায় কোন ছবি দেবো?", answer: "আমার ব্লেজারওয়ালা ছবির মতো একটা দাও — সাইড পোজ, ভাবুক চোখ, “আমি ভবিষ্যৎ দেখছি” লুক। 😎" },
      ],
    },
    {
      id: "boss", em: "😤", label: "বস খুব জ্বালায়",
      answers: [
        "বৎস, তোমার বস আগের জন্মে মশা ছিলো। এই জন্মেও কাজ একই — কানের কাছে ঘ্যানঘ্যান।",
        "বস জ্বালায় কারণ তার বসও তাকে জ্বালায়। এটা একটা চেইন। শুধু বাবার কোনো বস নাই। 😌",
        "ধ্যানে দেখলাম — তোমার বস শুক্রবার বিকেল ৫টায় “একটু কাজ” দেবে। মন শক্ত করো।",
      ],
      totka: [
        "বস মিটিংয়ে কথা বললে মাথা নাড়াও আর মাঝে মাঝে “এক্স্যাক্টলি” বলো। প্রমোশন নিশ্চিত।",
        "ডেস্কে বাবার ছবি রাখো। বস জিজ্ঞেস করলে বলবে “আমার মেন্টর”।",
        "ইমেইলে সবসময় “As per my last email” লিখো — বস বুঝবে তুমি সাধারণ মানুষ না।",
      ],
      followups: [
        { em: "🏖️", label: "বাবা, ছুটি দিচ্ছে না", answer: "ছুটি চাইবে না বৎস, বলবে “বাবা Laeeq এর আশ্রমে ধ্যান কোর্স আছে”। কেউ আধ্যাত্মিকতায় বাধা দেয় না। 🙏" },
      ],
    },
    {
      id: "phone", em: "📱", label: "মোবাইল ছাড়তে পারি না",
      answers: [
        "বৎস, মোবাইল তোমাকে ছাড়ছে না, তুমি মোবাইলকে না। এটা একতরফা প্রেম না, পারস্পরিক আসক্তি।",
        "বাবা নিজেও ধ্যানের মাঝে নোটিফিকেশন চেক করেন। এই সাইটটাও তো মোবাইলে দেখছো, তাই না? 📲",
        "তোমার স্ক্রিন টাইম দেখে বাবার দাড়ি আরো সাদা হয়ে গেলো বৎস।",
      ],
      totka: [
        "মোবাইলের ওয়ালপেপারে বাবার রাগী মুখ দাও। যতবার আনলক করবে, অপরাধবোধ হবে।",
        "ব্যাটারি ২০% হলে সেটাকে প্রকৃতির সংকেত মনে করো। চার্জ দিও না, বই পড়ো।",
        "সপ্তাহে একদিন “ডিজিটাল উপবাস” — শুধু বাবার সাইট দেখা জায়েজ।",
      ],
      followups: [
        { em: "🎮", label: "বাবা, গেম খেলা ছাড়তে পারছি না", answer: "গেমে তুমি র‍্যাংক বাড়াচ্ছো, জীবনে র‍্যাংক কমছে। ব্যালেন্স রাখো বৎস — ২ ঘণ্টা গেম, ২ মিনিট জীবন। 🎮" },
      ],
    },
    {
      id: "jam", em: "🚗", label: "ঢাকার জ্যামে জীবন শেষ",
      answers: [
        "বৎস, জ্যাম হলো ঢাকার ধ্যানকেন্দ্র। ২ ঘণ্টা গাড়িতে বসে থাকা মানেই তুমি অজান্তে সাধনা করছো। 🧘",
        "জ্যামের সমাধান বাবার কাছেও নাই। থাকলে বাবা নিজে বনানী থেকে মতিঝিল ৩ ঘণ্টায় যেতেন না।",
        "ধ্যানে দেখলাম ২০৪৭ সালে জ্যাম কমবে। ততদিন পর্যন্ত বাসে পডকাস্ট শুনো।",
      ],
      totka: [
        "জ্যামে বসে মনে মনে ১০০ পর্যন্ত গোনো। তারপর আবার গোনো। ১৪ বার গোনার পর পৌঁছে যাবে।",
        "রিকশাওয়ালা মামাকে বাবার নাম বলো — ভাড়া ৫ টাকা বেশি চাইবে, কারণ তুমি বিখ্যাত মানুষের ভক্ত।",
      ],
      followups: [
        { em: "🛵", label: "বাবা, বাইক কিনবো?", answer: "কিনো বৎস, কিন্তু মনে রেখো — বাইক জ্যাম পার হয়, ফুটপাত না। ফুটপাত মানুষের জন্য, বাবার জন্যও। 🚶" },
      ],
    },
    {
      id: "fake", em: "🧔", label: "বাবা, আপনি আসল না ভন্ড?",
      answers: [
        "বৎস, নামের মধ্যেই তো লেখা আছে — “ভন্ড”বাবা। আমি অন্তত সৎ ভন্ড! এই যুগে এটাও কম কিসে? 😇",
        "আসল-নকল সব মায়া বৎস। এই দাড়িও মায়া, এডিট করা। কিন্তু উপদেশগুলো ১০০% খাঁটি ফালতু।",
        "যে প্রশ্ন করে, সে জ্ঞানী। যে প্রশ্নের উত্তর দেয় না, সে বাবা। পরের প্রশ্ন বলো। 🙄",
      ],
      totka: [
        "বাবাকে সন্দেহ করার শাস্তি: ৭ দিন বাবার মিম শেয়ার করতে হবে।",
        "সন্দেহ দূর করতে দক্ষিণা দাও। দক্ষিণা দিলে সব সন্দেহ মুহূর্তেই বাবার দিকে চলে যায়।",
      ],
      followups: [
        { em: "📜", label: "বাবা, আপনার সার্টিফিকেট আছে?", answer: "আছে বৎস! “অনলাইন ভন্ডামি কোর্স — ৩ দিনে বাবা হোন” থেকে পাশ করেছি। গোল্ড মেডেল, কারণ আমি একাই ছিলাম। 🥇" },
        { em: "🧓", label: "বাবা, আপনার বয়স কত?", answer: "দাড়ি দেখে ৮০, মুখ দেখে ৩৫, কাজ দেখে ৫। বাবার বয়স হিসাবের বাইরে বৎস। ♾️" },
      ],
    },
  ];

  const GENERIC = [
    "হুম… এমন কঠিন সমস্যা বাবা গত ৩০০ বছরে দেখেননি। আপাতত এক কাপ চা খাও, সমস্যা ৪০% কমে যাবে। ☕",
    "বৎস, তোমার সমস্যার সমাধান আছে… কিন্তু সেটা বলতে গেলে ৫০১ টাকার প্রিমিয়াম প্যাকেজ লাগবে। ফ্রি ভার্সনে বলি — “সব ঠিক হয়ে যাবে” 🙂",
    "ধ্যানে বসলাম, দেখলাম… কিছুই দেখলাম না, ঘুমিয়ে পড়েছিলাম। তবে স্বপ্নে বিরিয়ানি দেখেছি — মানে তোমার ভাগ্য ভালো। 🍛",
    "এই সমস্যার মূল কারণ তোমার রাশি, তোমার গ্রহ, তোমার প্রতিবেশীর ওয়াই-ফাই, আর মঙ্গলবার। চারটাই বদলাও।",
    "বৎস, সমস্যা হলো নদীর মতো — আসে, যায়। তুমি শুধু সাঁতার শিখে রাখো। আর না শিখলে লাইফ জ্যাকেট কিনো। 🛟",
    "এটা নিয়ে চিন্তা করে লাভ নাই। চিন্তা করার দায়িত্ব বাবার, আর বাবা চিন্তা করেন না। ব্যস, সমাধান! 😌",
  ];

  const GENERIC_TOTKA = [
    "বাম পায়ে মোজা আগে পরবে, ডান পায়ে পরে। ৭ দিন। ফল না হলে উল্টো করবে।",
    "লেবু আর মরিচ দরজায় ঝুলাও। কাজ না হলে লেবু দিয়ে শরবত বানিয়ে খেয়ে ফেলো।",
    "পূর্ণিমার রাতে চাঁদের দিকে তাকিয়ে বলো “Laeeq বাবা কি জয়”। আশেপাশের লোক তাকাবে, সেটাও একটা অর্জন।",
    "তিনবার হাততালি দাও, একবার লাফ দাও, তারপর ভুলে যাও যে সমস্যা ছিলো।",
  ];

  const FEES = [
    "দক্ষিণা: ২টা সিঙ্গারা + ১ কাপ দুধ চা ☕",
    "দক্ষিণা: কাচ্চির এক প্লেট (আলু বড় সাইজ) 🍛",
    "দক্ষিণা: বাবার ৩টা মিম শেয়ার 📲",
    "দক্ষিণা: ফ্রি! আজ বাবার মন ভালো 😇",
    "দক্ষিণা: এক প্যাকেট চানাচুর আর একটা হাসি 😁",
  ];

  const THINKING = [
    "বাবা ধ্যানে বসেছেন",
    "গ্রহ-নক্ষত্র মিলানো হচ্ছে",
    "বাবা দাড়ি চুলকাচ্ছেন",
    "মহাবিশ্বের সার্ভারে কানেক্ট হচ্ছে",
    "বাবা গুগল করছেন (চুপ!)",
    "বাবা এক আঙুলে টাইপ করছেন ✍️",
    "বাবা চশমা খুঁজছেন (চোখেই আছে) 👓",
    "বাবা হিমালয়ের সাথে কল করছেন 📞",
  ];

  const POKES = [
    "উফ! ধ্যান ভাঙালে কেন বৎস? 😠",
    "খোঁচা দিলে দক্ষিণা ডাবল!",
    "আমি ঘুমাচ্ছিলাম না, ধ্যান করছিলাম। 😴",
    "এই আঙুল দিয়েই কি পরীক্ষার খাতা লিখো?",
    "সুড়সুড়ি লাগে বৎস! 🤭",
    "বাবার পাগড়ি ঠিক আছে তো? 👳",
    "আর একবার খোঁচা দিলে অভিশাপ দিবো — তোমার ওয়াই-ফাই স্লো হয়ে যাবে! 📶",
    "ওম… শান্তি… শান্তি… খোঁচা দিও না… 🕉️",
  ];

  const AFTER_ANSWER = [
    "আর কোনো সমস্যা আছে বৎস? 🙏",
    "আরো কিছু জানতে চাও? বাবা আজ ফ্রি আছেন।",
    "পরের সমস্যা বলো, বাবার চা ঠান্ডা হয়ে যাচ্ছে। ☕",
  ];

  /* ---------------- সাউন্ড (Web Audio, কোনো ফাইল লাগে না) ---------------- */
  let soundOn = true;
  let ctx = null;
  function audio() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; }
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function bell(freq = 520, dur = 2.2, vol = 0.25) {
    if (!soundOn) return;
    const a = audio(); if (!a) return;
    const t = a.currentTime;
    [1, 2.76, 5.4].forEach((m, i) => {
      const o = a.createOscillator(), g = a.createGain();
      o.type = "sine"; o.frequency.value = freq * m;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol / (i + 1), t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur / (i + 1));
      o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur);
    });
  }
  function whoosh(dur = 0.8) {
    if (!soundOn) return;
    const a = audio(); if (!a) return;
    const len = a.sampleRate * dur, buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    f.type = "bandpass"; f.Q.value = 1.2;
    f.frequency.setValueAtTime(300, a.currentTime);
    f.frequency.exponentialRampToValueAtTime(2400, a.currentTime + dur);
    g.gain.value = 0.35;
    src.buffer = buf; src.connect(f).connect(g).connect(a.destination); src.start();
  }
  function boing() {
    if (!soundOn) return;
    const a = audio(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.type = "triangle";
    o.frequency.setValueAtTime(180, t); o.frequency.exponentialRampToValueAtTime(600, t + 0.15);
    o.frequency.exponentialRampToValueAtTime(140, t + 0.4);
    g.gain.setValueAtTime(0.3, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + 0.5);
  }
  function blip() {
    if (!soundOn) return;
    const a = audio(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.frequency.setValueAtTime(880, t); o.frequency.setValueAtTime(1320, t + 0.06);
    g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + 0.16);
  }

  /* বাংলা ভয়েস থাকলে বাবা কথা বলবেন */
  let bnVoice = null;
  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    bnVoice = vs.find((v) => /^bn/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  /* tools/make_voice.py এর clean() এর সাথে হুবহু মিল থাকতে হবে */
  const voiceKey = (s) => s.replace(/[\u{1F000}-\u{1FFFF}\u{2300}-\u{23FF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️‍]/gu, "").replace(/\s+/g, " ").trim();
  const VOICE = window.BABA_VOICE || {};
  let player = null;
  function stopVoice() {
    if (player) { player.pause(); player = null; }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }
  function speak(text) {
    if (!soundOn) return;
    const clean = voiceKey(text);
    stopVoice();
    const file = VOICE[clean];
    if (file) {
      // রেকর্ড করা বাংলা ভয়েস + মন্দিরের মতো প্রতিধ্বনি (echo), গুরুর মতো
      player = new Audio("assets/audio/" + file);
      const a = audio();
      if (a) {
        try {
          const src = a.createMediaElementSource(player);
          const delay = a.createDelay(1), fb = a.createGain(), wet = a.createGain();
          delay.delayTime.value = 0.17; fb.gain.value = 0.32; wet.gain.value = 0.4;
          src.connect(a.destination);
          src.connect(delay); delay.connect(fb).connect(delay);
          delay.connect(wet).connect(a.destination);
        } catch (e) { /* echo ছাড়াই চলবে */ }
      }
      player.play().catch(() => {});
      return;
    }
    if (!bnVoice) return;
    try {
      const u = new SpeechSynthesisUtterance(clean);
      u.voice = bnVoice; u.lang = bnVoice.lang; u.rate = 0.92; u.pitch = 0.7;
      speechSynthesis.speak(u);
    } catch (e) { /* চুপ থাকাই উত্তম */ }
  }

  /* ---------------- ইফেক্টস ---------------- */
  const petalsEl = $("#petals");
  function petals(n = 18) {
    const kinds = ["🌼", "🌸", "🏵️", "🌺", "✨"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = pick(kinds);
      p.style.left = Math.random() * 100 + "vw";
      p.style.fontSize = 16 + Math.random() * 20 + "px";
      p.style.animationDuration = 3 + Math.random() * 4 + "s";
      p.style.animationDelay = Math.random() * 1.5 + "s";
      petalsEl.appendChild(p);
      p.addEventListener("animationend", () => p.remove());
    }
  }
  function smoke(n = 6) {
    const s = $("#smoke");
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "puff";
      p.style.left = 10 + Math.random() * 70 + "%";
      p.style.top = 40 + Math.random() * 45 + "%";
      p.style.animationDelay = Math.random() * 0.3 + "s";
      s.appendChild(p);
      p.addEventListener("animationend", () => p.remove());
    }
  }
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }

  /* ---------------- বাবার বাবল ---------------- */
  const bubble = $("#bubble"), bubbleText = $("#bubbleText");
  let typeToken = 0;
  async function say(text, { voice = true } = {}) {
    const my = ++typeToken;
    bubble.classList.remove("hidden");
    bubble.style.animation = "none"; void bubble.offsetWidth; bubble.style.animation = "";
    bubbleText.textContent = "";
    if (voice) speak(text);
    const chars = [...text];
    for (let i = 0; i < chars.length; i++) {
      if (my !== typeToken) return;
      bubbleText.textContent += chars[i];
      await wait(38);
    }
  }

  /* ---------------- ইন্ট্রো ---------------- */
  const baba = $("#baba");
  const aura = $(".aura");
  let introDone = false;

  async function runIntro(withSound) {
    soundOn = withSound;
    updateSoundBtn();
    if (withSound) audio();
    const curtain = $("#curtain");
    curtain.classList.add("open");
    bell(392, 2.5);
    await wait(900);

    baba.classList.add("arrive");
    whoosh(1.2);
    setTimeout(() => whoosh(1.0), 1300);
    setTimeout(() => whoosh(0.8), 2400);
    await wait(3600);

    curtain.classList.add("gone");
    document.body.classList.remove("locked");
    baba.classList.remove("arrive");
    baba.classList.add("levitate");
    aura.classList.add("on");
    smoke(9);
    bell(523, 3);
    petals(30);
    $("#darbar").classList.add("shake");
    setTimeout(() => $("#darbar").classList.remove("shake"), 600);

    await wait(500);
    await dropShades();
    await say("বলো বৎস, তোমার কি সমস্যা? 🙏");
    $("#consult").classList.remove("hidden");
    addBaba("আমি ভন্ড লেংটা বাবা Laeeq। সকল সমস্যার ১০০% ভুল সমাধান দিয়ে থাকি। বলো বৎস, তোমার কি সমস্যা? 🙏");
    renderMain();
    introDone = true;
    setTimeout(() => $("#picker").classList.add("wiggle"), 600);
    setTimeout(() => $("#picker").classList.remove("wiggle"), 1700);
  }

  /* ---------------- কালো চশমা: ঘুরে ঘুরে এসে চোখে বসে ---------------- */
  const shades = $("#shades");
  let shadesBusy = false;
  async function dropShades() {
    shades.classList.remove("on", "fly", "shine");
    void shades.offsetWidth;
    shades.classList.add("drop");
    whoosh(1.3);
    await wait(1300);
    // ঠাস করে চোখে বসলো
    boing(); bell(988, 1.2, 0.15);
    $("#darbar").classList.add("shake");
    setTimeout(() => $("#darbar").classList.remove("shake"), 500);
    await wait(200);
    shades.classList.remove("drop");
    shades.classList.add("on", "shine");
    await wait(700);
  }
  const SHADES_LINES = [
    "চশমা ছাড়া বাবা ভক্তদের চোখে চোখ রাখতে পারেন না।",
    "রোদ না বৎস, তোমার সমস্যার আলো চোখে লাগে।",
    "কালো চশমা মানে বাবার ভাব এক হাজার পার্সেন্ট।",
    "চশমা খুলো না বৎস, বাবার চোখে তাকালে তোমার পরীক্ষার রেজাল্ট দেখা যাবে।",
  ];
  shades.addEventListener("click", async (e) => {
    e.stopPropagation();
    if (!introDone || shadesBusy || busy) return;
    shadesBusy = true;
    shades.classList.remove("on", "shine");
    void shades.offsetWidth;
    shades.classList.add("fly");
    whoosh(0.6);
    say("আরে আরে! বাবার চশমা কই গেলো? 😱");
    await wait(1400);
    shades.classList.remove("fly");
    await dropShades();
    say(pick(SHADES_LINES) + " 😎");
    shadesBusy = false;
  });

  document.body.classList.add("locked");
  $("#enterBtn").addEventListener("click", () => runIntro(true), { once: true });
  $("#enterSilent").addEventListener("click", () => runIntro(false), { once: true });

  /* ---------------- চ্যাট ---------------- */
  const chat = $("#chat");
  function scrollChat() { chat.scrollTop = chat.scrollHeight; }
  const BABA_META = ["এইমাত্র", "ধ্যান থেকে পাঠানো", "হিমালয় থেকে", "স্বপ্নে লেখা", "ঘুমের ঘোরে"];
  function addBaba(html, { meta = true } = {}) {
    const m = document.createElement("div");
    m.className = "msg baba";
    m.innerHTML = `<img class="av" src="${BABA_AVATAR}" alt=""><div class="txt">${html}${meta ? `<span class="meta">${pick(BABA_META)}</span>` : ""}</div>`;
    chat.appendChild(m); scrollChat();
    $$(".msg.user .ticks:not(.seen)", chat).forEach((t) => { t.classList.add("seen"); t.textContent = "✓✓ বাবা দেখেছেন"; });
    return m;
  }
  function addUser(text) {
    const m = document.createElement("div");
    m.className = "msg user";
    const av = document.createElement("span"); av.className = "av"; av.textContent = "🙇";
    const t = document.createElement("div"); t.className = "txt"; t.textContent = text;
    const meta = document.createElement("span"); meta.className = "meta";
    meta.innerHTML = `এইমাত্র · <span class="ticks">✓ পাঠানো</span>`;
    t.appendChild(meta);
    m.append(av, t);
    chat.appendChild(m); scrollChat();
  }
  const STICKERS = ["আশীর্বাদ 🙏", "দক্ষিণা? 💰", "বাবা কুল 😎", "ঘুম পায় 😴", "হুম 🤔", "জয় সিঙ্গারা 🔺"];
  function maybeSticker() {
    if (Math.random() > 0.4) return;
    setTimeout(() => {
      const m = addBaba(`<div class="sticker-card"><img src="assets/img/face-baba.png" alt=""><b>${pick(STICKERS)}</b></div>`, { meta: false });
      m.classList.add("sticker");
      blip();
    }, 900);
  }
  const statusEl = $("#babaStatus"), ctDot = $("#ctDot");
  const IDLE_STATUS = ["🟢 অনলাইন — ভক্ত খুঁজছেন", "🟢 অনলাইন — দক্ষিণার অপেক্ষায়", "😴 ঘুম ঘুম পাচ্ছে", "🍛 কাচ্চি খাচ্ছেন, পরে রিপ্লাই", "🟢 অনলাইন — দাড়ি আঁচড়াচ্ছেন"];
  function setStatus(busyNow) {
    ctDot.classList.toggle("busy", busyNow);
    statusEl.textContent = busyNow ? "🧘 ধ্যান করছেন… (আসলে টাইপ করছেন)" : pick(IDLE_STATUS);
  }
  function addTyping() {
    const m = addBaba(`${pick(THINKING)} <span class="dots"><span>.</span><span>.</span><span>.</span></span>`, { meta: false });
    m.classList.add("typing");
    return m;
  }

  /* ---------------- ড্রপডাউন ---------------- */
  const picker = $("#picker"), pickerBtn = $("#pickerBtn"), pickerList = $("#pickerList"), pickerLabel = $("#pickerLabel");
  let busy = false;

  function setOptions(items, label) {
    pickerLabel.textContent = label;
    pickerList.innerHTML = "";
    items.forEach((it) => {
      const li = document.createElement("li");
      li.tabIndex = 0; li.setAttribute("role", "option");
      if (it.back) li.classList.add("back");
      li.innerHTML = `<span class="em">${it.em}</span><span></span>`;
      li.lastChild.textContent = it.label;
      const go = () => { closePicker(); it.onPick(); };
      li.addEventListener("click", go);
      li.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      pickerList.appendChild(li);
    });
  }
  function openPicker() {
    if (busy) return;
    picker.classList.add("open"); pickerBtn.setAttribute("aria-expanded", "true"); blip();
  }
  function closePicker() { picker.classList.remove("open"); pickerBtn.setAttribute("aria-expanded", "false"); }
  pickerBtn.addEventListener("click", (e) => { e.stopPropagation(); picker.classList.contains("open") ? closePicker() : openPicker(); });
  document.addEventListener("click", (e) => { if (!picker.contains(e.target)) closePicker(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePicker(); });

  function setBusy(v) {
    busy = v;
    setStatus(v);
    pickerBtn.disabled = v;
    $("#customInput").disabled = v;
    $("#customForm button").disabled = v;
    aura.classList.toggle("strong", v);
    baba.classList.toggle("thinking", v);
    baba.classList.toggle("levitate", !v);
  }

  function renderMain() {
    setOptions(
      PROBLEMS.map((p) => ({ em: p.em, label: p.label, onPick: () => consult(p) })),
      "🔮 তোমার সমস্যা বাছাই করো"
    );
  }
  function renderFollowups(p) {
    const opts = p.followups.map((f) => ({
      em: f.em, label: f.label,
      onPick: () => answerFollowup(p, f),
    }));
    opts.push({ em: "🙏", label: "ধন্যবাদ বাবা, অন্য সমস্যা আছে", back: true, onPick: () => { addUser("ধন্যবাদ বাবা, অন্য সমস্যা আছে"); afterAnswer(); } });
    setOptions(opts, `${p.em} এই ব্যাপারে আরো কিছু জিজ্ঞেস করো`);
  }

  async function think(ms = 1800) {
    setBusy(true);
    const t = addTyping();
    bell(660, 1.2, 0.12);
    await wait(ms + Math.random() * 900);
    t.remove();
    setBusy(false);
  }

  async function consult(p) {
    addUser(`${p.em} ${p.label}`);
    say("হুম… দাঁড়াও বৎস, ধ্যানে দেখছি… 🧘");
    await think();
    const ans = pick(p.answers);
    smoke(5); boing();
    addBaba(`${esc(ans)}<span class="totka">🪄 <b>বাবার টোটকা:</b> ${esc(pick(p.totka))}</span><span class="fee">${pick(FEES)}</span>`);
    say(ans);
    bumpCount();
    if (Math.random() < 0.35) petals(12);
    maybeSticker();
    renderFollowups(p);
  }

  async function answerFollowup(p, f) {
    addUser(`${f.em} ${f.label}`);
    say("আবার সমস্যা? দাঁড়াও… 😮‍💨");
    await think(1400);
    smoke(4); boing();
    addBaba(esc(f.answer));
    say(f.answer);
    // একবার উত্তর হলে সেই অপশন বাদ
    const rest = p.followups.filter((x) => x !== f);
    if (rest.length) renderFollowups({ ...p, followups: rest });
    else afterAnswer();
  }

  function afterAnswer() {
    const line = pick(AFTER_ANSWER);
    addBaba(line);
    say(line);
    renderMain();
  }

  $("#customForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = $("#customInput");
    const q = input.value.trim();
    if (!q || busy) { input.focus(); return; }
    input.value = "";
    addUser(q);
    say("এটা তো নতুন সমস্যা! দাঁড়াও… 🤔");
    await think(2200);
    const ans = pick(GENERIC);
    smoke(5); boing();
    addBaba(`${esc(ans)}<span class="totka">🪄 <b>বাবার টোটকা:</b> ${esc(pick(GENERIC_TOTKA))}</span><span class="fee">${pick(FEES)}</span>`);
    say(ans);
    bumpCount();
    renderMain();
  });

  $("#resetBtn").addEventListener("click", () => {
    if (busy) return;
    chat.innerHTML = "";
    addBaba("নতুন করে শুরু? আগের সব ভুলে যাও বৎস, যেমন তুমি পড়া ভুলে যাও। বলো, তোমার কি সমস্যা? 🙏");
    say("বলো বৎস, তোমার কি সমস্যা? 🙏");
    renderMain();
    bell(523, 2);
  });

  function esc(s) {
    return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ---------------- চ্যাট হেডারের বাটন ---------------- */
  const JOKES = {
    call: "বাবা ফোন ধরেন না বৎস। নেটওয়ার্ক শুধু হিমালয়ের চূড়ায় পাওয়া যায়।",
    video: "ভিডিও কল নিষেধ! বাবার পাগড়ি এখনো ঠিক করা হয়নি।",
    more: "আর কোনো অপশন নাই। বাবার কাছে সবকিছুই কম কম, শুধু দাড়ি বেশি।",
  };
  $$(".ct-actions button").forEach((b) => b.addEventListener("click", () => {
    const j = JOKES[b.dataset.joke];
    toast("🧔 " + j); speak(j); blip();
  }));

  /* ---------------- দানবাক্স ---------------- */
  let fund = 12;
  const DAN_LINES = [
    "টুং! বাবার কাচ্চি ফান্ডে জমা হলো।",
    "দানবাক্সটা আসলে বাবার টিফিন বক্স, কাউকে বলো না।",
    "এই টাকায় বাবা আরেকটা কালো চশমা কিনবেন।",
    "রসিদ চাইও না বৎস, বাবা ডিজিটাল না।",
  ];
  $("#danbox").addEventListener("click", function () {
    const c = document.createElement("span");
    c.className = "coin"; c.textContent = "🪙";
    this.appendChild(c);
    c.addEventListener("animationend", () => c.remove());
    setTimeout(() => {
      bell(1568, 0.5, 0.12); bell(2093, 0.4, 0.08);
      this.classList.remove("shake"); void this.offsetWidth; this.classList.add("shake");
      fund = Math.min(fund + 1 + Math.floor(Math.random() * 4), 99);
      $("#dbFund").textContent = "কাচ্চি ফান্ড: " + bn(fund) + "%";
      if (fund >= 99) { toast("🎉 কাচ্চি ফান্ড পূর্ণ! বাবা এখন বিরিয়ানি হাউসে রওনা দিয়েছেন 🍛"); petals(30); fund = 12; }
      else if (Math.random() < 0.5) { const l = pick(DAN_LINES); say(l); }
    }, 480);
  });

  /* ---------------- চুপ থাকলে বাবা আজগুবি মন্ত্র বিড়বিড় করেন ---------------- */
  const MANTRAS = [
    "ওং মং ফং… ক্রিং ক্রাং ফট্ স্বাহা!",
    "হিং টিং ছট! ফুস মন্তর ফুস! সমস্যা পালা ধুস!",
    "ওঁ কাচ্চায় নমঃ… সিঙ্গারায় স্বাহা…",
    "আলু বেগুন পটল, সমস্যা হবে বটল!",
    "ওং ফং ঢং… ওয়াই-ফাই ফুল সিগন্যাল ভবতু!",
    "জয় সিঙ্গারা, জয় চা, ভক্ত এবার দক্ষিণা দা!",
    "ক্রিং ক্রিং… হ্যালো ব্রহ্মাণ্ড? বাবা বলছি… নেটওয়ার্ক নাই…",
    "উম্ম্ম্ম… ঢং ঢং… টাকা আসুক ঝনঝন!",
    "ফুউউ ফাআআ… পেট ভরা থাকুক, মাথা খালি থাকুক!",
  ];
  let lastAct = Date.now(), darbarVisible = true;
  ["click", "keydown", "touchstart"].forEach((ev) => document.addEventListener(ev, () => (lastAct = Date.now()), { passive: true }));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => { darbarVisible = es[0].isIntersecting; }, { threshold: 0.4 }).observe($(".stage"));
  }
  function mantraNotes() {
    const wrap = $(".baba-wrap");
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const n = document.createElement("span");
        n.className = "mantra-note";
        n.textContent = pick(["🕉️", "♪", "♫", "✨", "ॐ"]);
        n.style.left = 38 + Math.random() * 24 + "%";
        n.style.top = "22%";
        n.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
        n.style.setProperty("--rz", (Math.random() * 60 - 30) + "deg");
        wrap.appendChild(n);
        n.addEventListener("animationend", () => n.remove());
      }, i * 350);
    }
  }
  setInterval(() => {
    if (!introDone || busy || !darbarVisible || document.hidden) return;
    if (Date.now() - lastAct < 11000) return;
    lastAct = Date.now();
    const m = pick(MANTRAS);
    bubble.classList.add("mantra");
    say(m).then(() => setTimeout(() => bubble.classList.remove("mantra"), 2500));
    mantraNotes();
    statusEl.textContent = "🕉️ মন্ত্র পড়ছেন (নিজেও জানেন না কী)";
  }, 3000);

  /* ---------------- বাবাকে খোঁচা ---------------- */
  let pokeCount = 0;
  baba.addEventListener("click", () => {
    if (!introDone || busy) return;
    pokeCount++;
    baba.classList.remove("levitate", "poked");
    void baba.offsetWidth;
    baba.classList.add("poked");
    boing(); smoke(3);
    setTimeout(() => { baba.classList.remove("poked"); if (!busy) baba.classList.add("levitate"); }, 600);
    if (pokeCount === 10) {
      say("১০ বার খোঁচা! তুমি এখন বাবার অফিসিয়াল বিরক্তিকর ভক্ত। 🏆");
      petals(40); bell(784, 3);
    } else {
      say(pick(POKES));
    }
  });

  /* ---------------- পালিয়ে যাওয়া দক্ষিণা বাটন ---------------- */
  const dak = $("#dakshinaBtn");
  let dodge = 0;
  function runAway() {
    if (dodge >= 6) return;
    dodge++;
    const x = (Math.random() * 160 - 80) | 0, y = (Math.random() * -60 - 10) | 0;
    dak.style.transform = `translate(${x}px, ${y}px) rotate(${(Math.random() * 30 - 15) | 0}deg)`;
    const lines = ["এত সহজে দক্ষিণা নিবো না!", "বাবা লজ্জা পাচ্ছেন 🙈", "আরে আরে ধরো আমাকে!", "বাবা ডিজিটাল টাকা ভয় পান!", "আরেকটু চেষ্টা করো বৎস!", "আচ্ছা আচ্ছা, এবার ধরো…"];
    dak.textContent = "💰 " + lines[dodge - 1];
  }
  dak.addEventListener("mouseenter", runAway);
  dak.addEventListener("click", () => {
    dak.style.transform = "";
    dak.textContent = "💰 দক্ষিণা দাও";
    dodge = 0;
    toast("🙏 বাবা অনলাইনে দক্ষিণা নেন না। এক প্লেট কাচ্চি নিয়ে সরাসরি দেখা করো। আলু যেন বড় হয়!");
    petals(25); bell(880, 2);
  });

  /* ---------------- ভক্ত কাউন্টার ---------------- */
  let count = 1234 + Math.floor(Math.random() * 500);
  const countEl = $("#bhaktCount");
  countEl.textContent = bnNum(count);
  function bumpCount() { count += 1 + Math.floor(Math.random() * 3); countEl.textContent = bnNum(count); }
  setInterval(() => { if (Math.random() < 0.5) bumpCount(); }, 4000);

  /* ---------------- রাশিফল: ঘুরন্ত রাশিচক্র ---------------- */
  const RASHI = [
    ["♈", "মেষ", "২১ মার্চ – ১৯ এপ্রিল"], ["♉", "বৃষ", "২০ এপ্রিল – ২০ মে"], ["♊", "মিথুন", "২১ মে – ২০ জুন"],
    ["♋", "কর্কট", "২১ জুন – ২২ জুলাই"], ["♌", "সিংহ", "২৩ জুলাই – ২২ আগস্ট"], ["♍", "কন্যা", "২৩ আগস্ট – ২২ সেপ্টেম্বর"],
    ["♎", "তুলা", "২৩ সেপ্টেম্বর – ২২ অক্টোবর"], ["♏", "বৃশ্চিক", "২৩ অক্টোবর – ২১ নভেম্বর"], ["♐", "ধনু", "২২ নভেম্বর – ২১ ডিসেম্বর"],
    ["♑", "মকর", "২২ ডিসেম্বর – ১৯ জানুয়ারি"], ["♒", "কুম্ভ", "২০ জানুয়ারি – ১৮ ফেব্রুয়ারি"], ["♓", "মীন", "১৯ ফেব্রুয়ারি – ২০ মার্চ"],
  ];
  const FORTUNE = [
    "আজ তুমি ফ্রিজ খুলবে, কিছু পাবে না, আবার খুলবে। তৃতীয়বারে একটা ডিম পাবে। ভাগ্য সহায়।",
    "আজ কেউ তোমাকে “ভাই একটু শোনো” বলবে। দৌড় দাও। এটা ধার চাওয়ার পূর্বাভাস।",
    "আজ তোমার ফোনের চার্জ ১% থাকবে ঠিক যখন সবচেয়ে জরুরি কল আসবে। চার্জার সাথে রাখো।",
    "প্রেমের ক্ষেত্রে আজ শুভ দিন… অন্য কারো জন্য। তুমি আজ চা খাও।",
    "আজ অফিসে/ক্লাসে কেউ তোমার প্রশংসা করবে। তারপর একটা কাজ দিবে। সাবধান।",
    "আজ রিকশা পাবে, কিন্তু রিকশাওয়ালা যেতে চাইবে না। ধৈর্য ধরো, এটাই জীবন।",
    "আজ তোমার পুরনো ক্রাশ স্টোরি দেখবে। কিছু বলবে না। তুমি ৩ ঘণ্টা এটা নিয়ে ভাববে।",
    "অর্থভাগ্য আজ উজ্জ্বল — পুরনো প্যান্টের পকেটে ২০ টাকা পাবে।",
    "আজ বিরিয়ানি খাওয়ার প্রবল যোগ আছে। প্রতিরোধ করো না, গ্রহের বিরুদ্ধে যেও না।",
    "আজ কোনো সিদ্ধান্ত নিও না। কাল নিও। কালও না নিলে পরশু। বাবা এভাবেই বাবা হয়েছেন।",
    "স্বাস্থ্য ভালো যাবে, যদি সিঁড়ি দিয়ে উঠো। লিফট দেখলে সব গ্রহ উল্টে যাবে।",
    "আজ তুমি এই সাইটটা কাউকে শেয়ার করবে। না করলে পরের ৭ দিন ইন্টারনেট স্লো। 📶",
  ];
  const COLORS = ["গেরুয়া", "পাগড়ি-লাল", "দাড়ি-সাদা", "কাচ্চি-হলুদ", "জ্যাম-ধূসর", "চা-বাদামী"];
  const FOODS = ["কাচ্চি 🍛", "ফুচকা", "চটপটি", "সিঙ্গারা 🔺", "ঝালমুড়ি", "খিচুড়ি", "পরোটা-ডিম"];
  const TIMES = ["দুপুর ২টা (ঘুমের সময়)", "রাত ৩টা (রিলসের সময়)", "সকাল ১১টা (অ্যালার্ম বন্ধের পর)", "বিকেল ৫টা (চায়ের সময়)"];
  const wheel = $("#zWheel"), zBall = $("#zBall"), result = $("#rashiResult");
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  let wheelRot = 0, reading = false;
  RASHI.forEach(([sym, name, dates], i) => {
    const b = document.createElement("button");
    b.className = "z-btn";
    b.style.setProperty("--a", i * 30 + "deg");
    b.innerHTML = `<span class="sym">${sym}︎</span><span class="nm">${name}</span>`;
    b.setAttribute("aria-label", name + " রাশি");
    b.addEventListener("click", () => readRashi(i));
    wheel.appendChild(b);
  });
  zBall.addEventListener("click", () => readRashi(Math.floor(Math.random() * 12)));

  async function readRashi(i) {
    if (reading) return;
    reading = true;
    const [sym, name, dates] = RASHI[i];
    // চাকা ঘুরিয়ে বাছাই করা রাশিকে উপরে আনো (অন্তত এক পাক ঘুরবে)
    let target = -i * 30;
    while (target > wheelRot - 360) target -= 360;
    wheelRot = target;
    wheel.style.setProperty("--rot", wheelRot + "deg");
    $$(".z-btn", wheel).forEach((x, k) => x.classList.toggle("active", k === i));
    zBall.classList.add("reading");
    whoosh(1.4);
    result.innerHTML = `<div class="rc-empty"><div class="rc-big">🔮</div><p>বাবা ক্রিস্টাল বলে তাকাচ্ছেন <span class="dots"><span>.</span><span>.</span><span>.</span></span><br>(আসলে ঝাপসা দেখছেন)</p></div>`;
    await wait(1700);
    zBall.classList.remove("reading");
    bell(700, 1.5, 0.15);
    const f = pick(FORTUNE);
    const meters = [["❤️ প্রেম", rnd(0, 100)], ["💰 টাকা", rnd(0, 40)], ["😴 ঘুম", rnd(70, 100)], ["🧔 ভন্ডামি", rnd(60, 100)]];
    result.innerHTML = `
      <div class="rc-head"><span class="rc-sym">${sym}︎</span><div><h3>${name} রাশি</h3><small>${dates}</small></div></div>
      <p class="rc-text">${f}</p>
      <div class="rc-meters">${meters.map(([l, v]) => `<div>${l} <span style="float:right">${bn(v)}%</span><i><b data-v="${v}"></b></i></div>`).join("")}</div>
      <div class="rc-lucky">
        <span>🎨 শুভ রং: ${pick(COLORS)}</span><span>🔢 শুভ সংখ্যা: ${bn(rnd(1, 99))}</span>
        <span>🍽️ শুভ খাবার: ${pick(FOODS)}</span><span>⏰ শুভ সময়: ${pick(TIMES)}</span>
      </div>`;
    result.classList.remove("flash"); void result.offsetWidth; result.classList.add("flash");
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".rc-meters b", result).forEach((b) => (b.style.width = b.dataset.v + "%"))));
    speak(f);
    reading = false;
  }

  /* ---------------- বাবার ঘুম: নাক ডাকা + ডিস্টার্ব করিও না ---------------- */
  const sScene = $("#sleepScene"), sBaba = $("#sleepBaba"), sBubble = $("#sleepBubble"), dnd = $("#dnd");
  const SNORES = ["Z", "z", "Zzz", "খররর…", "ঘঁ-অ-অ-অ…", "ফুউউউ…", "হঁক-ছুউউ", "ঘড়ড়ড়…", "💤", "😴", "ফুরররর…"];
  const DISTURB = [
    "উম্ম… ডিস্টার্ব করিও না বৎস… ঘুমাচ্ছি…",
    "আবার? বাবা এখন ধ্যানে… মানে ঘুমে। পরে আসো।",
    "ডিস্টার্ব করিও না! স্বপ্নে কাচ্চি খাচ্ছিলাম, প্লেটটা কেড়ে নিলে!",
    "শেষবারের মতো বলছি, ডিস্টার্ব করিও না! নইলে অভিশাপ দিবো, তোমার ফোনের চার্জ সবসময় এক পার্সেন্ট থাকবে!",
    "যাও! এই নাও স্যান্ডেল!",
  ];
  let asleep = true, sleepVisible = false, tries = 0, totalTries = 0, wakeTimer = null;
  sBaba.classList.add("asleep");

  // কার্টুনের মতো নাক ডাকা — প্রতিবার একটু আলাদা
  let noiseCache = null;
  function noiseBuf(a) {
    if (!noiseCache) {
      const len = a.sampleRate * 2, b = a.createBuffer(1, len, a.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      noiseCache = b;
    }
    const s = a.createBufferSource(); s.buffer = noiseCache; return s;
  }
  function envGain(a, t, peak, attack, dur) {
    const g = a.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    return g;
  }
  function chopper(a, t, dur, rate1, rate2) { // খরখরে কাঁপুনি
    const trem = a.createGain(); trem.gain.value = 0.5;
    const lfo = a.createOscillator(); lfo.type = "square";
    lfo.frequency.setValueAtTime(rate1, t); lfo.frequency.linearRampToValueAtTime(rate2, t + dur);
    const depth = a.createGain(); depth.gain.value = 0.5;
    lfo.connect(depth).connect(trem.gain); lfo.start(t); lfo.stop(t + dur + 0.05);
    return trem;
  }
  function rattle(a, t, dur) { // "খরররররর" — শেষে পিচ উঠে যায়
    const env = envGain(a, t, 0.55, dur * 0.75, dur);
    const trem = chopper(a, t, dur, 18, 34);
    const saw = a.createOscillator(); saw.type = "sawtooth";
    saw.frequency.setValueAtTime(55, t); saw.frequency.exponentialRampToValueAtTime(120, t + dur);
    const sawLp = a.createBiquadFilter(); sawLp.type = "lowpass"; sawLp.frequency.value = 700;
    const sawG = a.createGain(); sawG.gain.value = 0.35;
    const n = noiseBuf(a), lp = a.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 450;
    saw.connect(sawLp).connect(sawG).connect(trem); n.connect(lp).connect(trem);
    trem.connect(env).connect(a.destination);
    saw.start(t); n.start(t); saw.stop(t + dur); n.stop(t + dur);
  }
  function whistle(a, t) { // "ফিউউউউ~" কাঁপা কাঁপা শিস, শেষে "উইপ!"
    const o = a.createOscillator(); o.type = "sine";
    o.frequency.setValueAtTime(1150, t); o.frequency.exponentialRampToValueAtTime(480, t + 0.95);
    const vib = a.createOscillator(); vib.frequency.value = 7;
    const vibG = a.createGain(); vibG.gain.value = 45;
    vib.connect(vibG).connect(o.frequency);
    o.connect(envGain(a, t, 0.12, 0.08, 1)).connect(a.destination);
    o.start(t); vib.start(t); o.stop(t + 1.05); vib.stop(t + 1.05);
    const w = a.createOscillator(); w.type = "sine";
    w.frequency.setValueAtTime(500, t + 1.08); w.frequency.exponentialRampToValueAtTime(1300, t + 1.25);
    w.connect(envGain(a, t + 1.08, 0.1, 0.03, 0.2)).connect(a.destination);
    w.start(t + 1.08); w.stop(t + 1.3);
  }
  function lipFlap(a, t) { // "পব্‌ব্‌ব্‌ব্‌ট" — ঠোঁট কাঁপানো
    const dur = 0.95, env = envGain(a, t, 0.5, 0.06, dur), trem = chopper(a, t, dur, 16, 11);
    const n = noiseBuf(a), bp = a.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 260; bp.Q.value = 1.5;
    const s = a.createOscillator(); s.type = "sawtooth"; s.frequency.setValueAtTime(95, t); s.frequency.linearRampToValueAtTime(70, t + dur);
    const sG = a.createGain(); sG.gain.value = 0.3;
    n.connect(bp).connect(trem); s.connect(sG).connect(trem);
    trem.connect(env).connect(a.destination);
    n.start(t); s.start(t); n.stop(t + dur); s.stop(t + dur);
  }
  function snort(a, t) { // "হঁক!"
    const n = noiseBuf(a), lp = a.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 950;
    n.connect(lp).connect(envGain(a, t, 0.6, 0.02, 0.18)).connect(a.destination);
    const s = a.createOscillator(); s.type = "sawtooth"; s.frequency.setValueAtTime(150, t); s.frequency.exponentialRampToValueAtTime(85, t + 0.16);
    s.connect(envGain(a, t, 0.2, 0.02, 0.17)).connect(a.destination);
    n.start(t); s.start(t); n.stop(t + 0.2); s.stop(t + 0.2);
  }
  function mumble(a, t) { // ঘুমের ঘোরে "উম-ন্যাম-ম্ম"
    for (let i = 0; i < 3; i++) {
      const st = t + i * 0.2, o = a.createOscillator(); o.type = "triangle";
      const f = 160 + Math.random() * 90;
      o.frequency.setValueAtTime(f, st); o.frequency.linearRampToValueAtTime(f * (i === 1 ? 1.25 : 0.85), st + 0.14);
      const lp = a.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 800;
      o.connect(lp).connect(envGain(a, st, 0.22, 0.03, 0.16)).connect(a.destination);
      o.start(st); o.stop(st + 0.18);
    }
  }
  function snoreSound() {
    if (!soundOn) return;
    const a = audio(); if (!a) return;
    const t = a.currentTime, r = Math.random();
    rattle(a, t, 1.3);
    if (r < 0.4) whistle(a, t + 1.5);
    else if (r < 0.75) lipFlap(a, t + 1.45);
    else { snort(a, t + 1.4); snort(a, t + 1.65); mumble(a, t + 2.0); }
  }

  function spawnSnore() {
    const sr = sScene.getBoundingClientRect(), nr = $(".sl-snot", sBaba).getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "snore";
    s.textContent = pick(SNORES);
    s.style.left = nr.left - sr.left + nr.width / 2 + "px";
    s.style.top = nr.top - sr.top + "px";
    s.style.fontSize = 16 + Math.random() * 18 + "px";
    s.style.setProperty("--dx", (Math.random() < 0.5 ? -1 : 1) * (40 + Math.random() * 140) + "px");
    s.style.setProperty("--rz", (Math.random() * 50 - 25) + "deg");
    sScene.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  }

  // প্রতি ৩.২ সেকেন্ডে এক দফা নাক ডাকা (নাকের বাবলের সাথে তাল মিলিয়ে)
  setInterval(() => {
    if (!asleep || !sleepVisible || document.hidden) return;
    snoreSound();
    spawnSnore();
    setTimeout(() => asleep && spawnSnore(), 700);
    setTimeout(() => asleep && spawnSnore(), 1600);
  }, 3200);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es) => { sleepVisible = es[0].isIntersecting; }, { threshold: 0.3 }).observe(sScene);
  } else sleepVisible = true;

  // ঘুম মিটার
  const sleepStart = Date.now() - (3 * 3600 + rnd(0, 3599)) * 1000;
  function tickStats() {
    const s = Math.floor((Date.now() - sleepStart) / 1000);
    $("#slTime").textContent = `${bn(Math.floor(s / 3600))} ঘণ্টা ${bn(Math.floor((s % 3600) / 60))} মিনিট ${bn(s % 60)} সে.`;
    $("#slDb").textContent = asleep ? `${bn(rnd(88, 112))} ডেসিবেল 📢` : "০ (রেগে আছেন)";
  }
  tickStats(); setInterval(tickStats, 1000);

  function disturb() {
    if (!introDone) return;
    tries++; totalTries++;
    $("#slTries").textContent = bn(totalTries) + " বার";
    asleep = false;
    clearTimeout(wakeTimer);
    sBaba.classList.remove("asleep", "awake"); void sBaba.offsetWidth; sBaba.classList.add("awake");
    dnd.classList.remove("angry"); void dnd.offsetWidth; dnd.classList.add("angry");
    $("#slMood").textContent = tries >= 4 ? "🌋 আগ্নেয়গিরি" : tries >= 2 ? "😤 গরম" : "😠 বিরক্ত";
    boing();
    const line = DISTURB[Math.min(tries, DISTURB.length) - 1];
    sBubble.textContent = line + (tries >= 3 ? " 😤" : " 😠");
    sBubble.classList.add("show");
    speak(line);
    if (tries >= DISTURB.length) {
      setTimeout(() => {
        const sl = document.createElement("div");
        sl.className = "slipper"; sl.textContent = "🩴";
        document.body.appendChild(sl);
        whoosh(0.9);
        sl.addEventListener("animationend", () => sl.remove());
        setTimeout(() => toast("🩴 বাবা স্যান্ডেল ছুঁড়ে মেরেছেন! এবার শান্তিতে ঘুমাতে দাও।"), 900);
      }, 900);
      tries = 0;
    }
    wakeTimer = setTimeout(() => {
      sBubble.classList.remove("show");
      sBaba.classList.remove("awake");
      sBaba.classList.add("asleep");
      dnd.classList.remove("angry");
      $("#slMood").textContent = "😴 শান্ত";
      asleep = true;
    }, tries === 0 ? 5200 : 4200);
  }
  sBaba.addEventListener("click", disturb);
  sBaba.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); disturb(); } });

  /* ---------------- মিম ---------------- */
  const MEME_LINES = [
    "অফিসের চাকরি ছেড়ে দক্ষিণার চাকরি নিলাম। বেতন কম, কিন্তু বস নাই, মিটিংও নাই।",
    "ভক্তরা ভাবে বাবা ধ্যানে উড়ছেন। আসলে বাবা গভীর ঘুমে, আর নাক ডাকার শব্দকে ওরা মন্ত্র ভাবে।",
    "এই পোস্টার বাবা নিজেই বানিয়েছেন। পুরস্কারের সিঙ্গারাও বাবা নিজেই খাবেন।",
    "মাসের সেরা কর্মী হয়েছিলাম, কারণ মিটিংয়ে ঘুমালেও আমার চোখ খোলা থাকে। এটাকে বলে প্রতিভা, বৎস।",
    "ভক্তের সমস্যা গুরুত্বপূর্ণ। কিন্তু কাচ্চি ঠান্ডা হয়ে গেলে সেটা আরো বড় সমস্যা।",
    "দক্ষিণার আগে আর পরে বাবা একই মানুষ। শুধু দুইটা সিঙ্গারা পেটে গেলে মাথার উপর আলো জ্বলে ওঠে।",
  ];
  $$(".mm").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.remove("wobble"); void el.offsetWidth; el.classList.add("wobble");
      boing();
      speak(MEME_LINES[+el.dataset.i]);
    });
  });

  /* ---------------- বিবর্তন ---------------- */
  const scene = $(".evo-scene");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((es, ob) => {
      if (es.some((e) => e.isIntersecting)) { scene.classList.add("seen"); ob.disconnect(); }
    }, { threshold: 0.3 }).observe(scene);
  } else scene.classList.add("seen");

  const EVO_LINES = [
    "এটা বাবার আদিম রূপ। কলা ছাড়া কিছু বুঝতেন না। এখনো কলা দেখলে চোখ চকচক করে।",
    "ছাত্র অবস্থায় বাবা পরীক্ষায় শূন্য পেয়েছিলেন। শূন্য মানে অসীমের শুরু, বৎস।",
    "কর্পোরেট জীবনে বাবা দিনে চৌদ্দটা মিটিং করতেন। একটাতেও কাজের কথা হয়নি।",
    "এই সেই ঐতিহাসিক রাত। রিজাইন লেটার হাতে, মাথার উপর মেঘ, আর মনে একটাই কথা, আর না।",
    "আর এই হলো আজকের আমি। হাঁটি না, উড়ি। কাজ করি না, দক্ষিণা নেই। বিবর্তন সম্পূর্ণ।",
  ];
  const figs = $$(".fig", scene), evoCards = $$(".evo-c");
  function evoPick(i) {
    const f = figs[i];
    f.classList.remove("jump"); void f.getBoundingClientRect(); f.classList.add("jump");
    evoCards.forEach((c, k) => c.classList.toggle("active", k === i));
    boing();
    if (i === 4) { petals(14); bell(784, 2); }
    speak(EVO_LINES[i]);
  }
  figs.forEach((f, i) => {
    f.addEventListener("click", () => evoPick(i));
    f.addEventListener("animationend", (e) => { if (e.animationName === "jump") f.classList.remove("jump"); });
  });
  evoCards.forEach((c, i) => c.addEventListener("click", () => evoPick(i)));

  /* ---------------- ভক্তদের অভিজ্ঞতা — অটো স্লাইডার ---------------- */
  const track = $("#testiGrid"), slider = $("#testiSlider"), dotsEl = $("#testiDots");
  const cards = $$("blockquote", track);
  for (let i = cards.length - 1; i > 0; i--) { // প্রতিবার এলোমেলো ক্রমে
    const j = Math.floor(Math.random() * (i + 1));
    track.insertBefore(cards[j], cards[i]); [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  cards.forEach((c) => track.appendChild(c));
  let slide = 0, slideTimer = null, paused = false;
  const perView = () => (innerWidth <= 600 ? 1 : innerWidth <= 900 ? 2 : 3);
  const maxSlide = () => Math.max(0, cards.length - perView());
  function buildDots() {
    dotsEl.innerHTML = "";
    for (let i = 0; i <= maxSlide(); i++) {
      const d = document.createElement("button");
      d.setAttribute("aria-label", "স্লাইড " + bn(i + 1));
      d.addEventListener("click", () => { go(i); restart(); });
      dotsEl.appendChild(d);
    }
  }
  function go(i) {
    const max = maxSlide();
    slide = i > max ? 0 : i < 0 ? max : i;
    track.style.transform = `translateX(${cards[0].offsetLeft - cards[slide].offsetLeft}px)`;
    const pv = perView();
    cards.forEach((c, k) => c.classList.toggle("in", k >= slide && k < slide + pv));
    $$("button", dotsEl).forEach((d, k) => d.classList.toggle("on", k === slide));
  }
  function restart() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => { if (!paused && !document.hidden) go(slide + 1); }, 4000);
  }
  $("#testiPrev").addEventListener("click", () => { go(slide - 1); restart(); blip(); });
  $("#testiNext").addEventListener("click", () => { go(slide + 1); restart(); blip(); });
  slider.addEventListener("mouseenter", () => (paused = true));
  slider.addEventListener("mouseleave", () => (paused = false));
  // মোবাইলে সোয়াইপ
  let sx = null;
  slider.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; paused = true; }, { passive: true });
  slider.addEventListener("touchend", (e) => {
    paused = false;
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { go(slide + (dx < 0 ? 1 : -1)); restart(); }
  });
  let rz;
  addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { buildDots(); go(Math.min(slide, maxSlide())); }, 150); });
  buildDots(); go(0); restart();

  /* ---------------- সাউন্ড টগল ---------------- */
  const soundBtn = $("#soundToggle");
  function updateSoundBtn() { soundBtn.textContent = soundOn ? "🔊" : "🔇"; }
  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn; updateSoundBtn();
    if (soundOn) { audio(); bell(523, 1.2); toast("🔊 বাবার আওয়াজ চালু"); }
    else { stopVoice(); toast("🔇 বাবা এখন মৌনব্রত পালন করছেন"); }
  });

  /* লোগোতে ক্লিক করলে উপরে + ফুল */
  $(".logo").addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); petals(15); bell(600, 1.5); });

  /* ট্যাব ছেড়ে গেলে টাইটেল বদলায় */
  const origTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "🙏 বৎস, ফিরে এসো! বাবা অপেক্ষায়…" : origTitle;
  });
})();
