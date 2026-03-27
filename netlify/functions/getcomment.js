exports.handler = async (event, context) => {
  const prefixes = ["", "ما شاء الله، ", "سبحان الله، ", "تبارك الله، ", "بكل أمانة، ", "يا جماعة، ", "فعلاً، ", "بصراحة، ", "لله درك، ", "يا روعة، ", "صدقاً، ", "من القلب، ", "والله، ", "يا مبدع، "];
  const adjectives = ["رائع", "مميز", "إبداعي", "أسطوري", "جميل", "مفيد", "هادف", "راقي", "احترافي", "عالمي", "مذهل", "خرافي", "تاريخي", "جبار", "نظيف", "نادر", "متكامل", "رهيب", "خارق", "فريد", "راقي جداً", "منظم"];
  const subjects = ["فيديو", "محتوى", "مقطع", "شرح", "درس", "عمل", "مجهود", "طرح", "أسلوب", "إبداع", "درس تعليمي", "إنتاج", "تقديم", "سرد", "تحليل", "موضوع", "كلام"];
  const gratitude = ["شكراً على", "جزاك الله خيراً على", "بارك الله في مجهودك في", "كل التقدير لـ", "تحية لك على", "تسلم ايدك على", "شكراً جزيلاً لـ", "ممنون لك على", "كل الشكر لـ", "يعطيك العافية على", "دمت مبدعاً في"];
  const qualities = ["المونتاج", "التصوير", "الأداء", "التقديم", "المعلومات", "التنسيق", "الصوت", "الإضاءة", "اختيار المواضيع", "بساطة الشرح", "دقة التفاصيل", "جمال الإخراج", "سرعة الإيصال"];
  const closing = ["استمر يا بطل!", "بالتوفيق دائماً.", "بانتظار الجديد.", "نحن معك.", "إلى الأمام!", "الله يوفقك.", "تحياتي لك.", "واصل الإبداع.", "قناتك كنز.", "دمت فخراً لنا.", "المستقبل لك.", "لا تتوقف.", "كل الدعم."];
  const entities = ["البرمجة", "التقنية", "التطوير", "اليوتيوب", "صناعة المحتوى", "هذا المجال", "عالم التقنية", "الذكاء الاصطناعي", "البرمجيات", "الويب", "التصميم", "الابتكار"];
  const impacts = ["استفدت كثيراً", "تعلمت أشياء جديدة", "حللت لي مشكلة كبيرة", "أعطيتني دافع قوي", "غيرت نظرتي للأمور", "بسطت لي المعلومة", "فتحت لي آفاقاً جديدة", "وفرت عليّ وقتاً طويلاً", "كنت أحتاج هذا بشدة"];
  const reactions = ["أبهرتني", "أذهلتني", "أمتعتني", "أفدتني", "أضحكتني", "ألهمتني", "أقنعتني"];
  const timeframes = ["اليوم", "هذا المساء", "منذ الصباح", "هذا الأسبوع", "في كل مرة", "دائماً وأبداً", "في هذا الوقت"];
  const origins = ["من مصر", "من السعودية", "من المغرب", "من الجزائر", "من كل العرب", "من فلسطين", "من متابعيك المخلصين", "من قلب المحبين"];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const templates = [
    () => `${random(prefixes)}${random(subjects)} ${random(adjectives)} ${random(timeframes)}، ${random(closing)}`,
    () => `${random(gratitude)} ${random(subjects)} الـ ${random(adjectives)} في ${random(entities)}.`,
    () => `جودة ${random(qualities)} و${random(qualities)} في تطور ملحوظ، ${random(closing)}`,
    () => `أفضل قناة تشرح ${random(entities)} بوضوح ${random(origins)}، ${random(impacts)}.`,
    () => `بارك الله فيك و${random(['جعله في ميزان حسناتك', 'وفقك لما تحبه وترضاه', 'نفع بك', 'بارك في عمرك'])} يا ${random(['مبدع', 'أستاذ', 'فنان', 'بطل'])}.`,
    () => `أنا من أشد المعجبين بـ ${random(['أسلوبك', 'قناتك', 'محتواك', 'طريقتك'])} و${random(qualities)}، ${random(closing)}`,
    () => `لقد ${random(impacts)} من هذا الـ ${random(subjects)} الـ ${random(adjectives)}، شكراً لك.`,
    () => `تم الإعجاب والاشتراك ${random(origins)}، ${random(closing)}`,
    () => `تحية لك من القلب على هذا الـ ${random(subjects)} ${random(adjectives)}.. ${random(reactions)}!`,
    () => `أنت ${random(['قدوة', 'مثال للمبدع', 'أسطورة', 'فنان', 'عبقري'])} في ${random(entities)} ${random(timeframes)}، ${random(closing)}`,
    () => `${random(subjects)} ${random(adjectives)} من الألف إلى الياء، ${random(impacts)} و${random(reactions)}.`,
    () => `دائماً ما تقدم لنا الأفضل في ${random(entities)}، ${random(closing)} ${random(prefixes)}`,
    () => `لا أتخيل يومي بدون متابعة جديدك في ${random(entities)} ${random(origins)}.`,
    () => `بكل أمانة، أنت الأفضل في مجال ${random(entities)} بلا منازع.. ${random(reactions)} جداً.`,
    () => `شرح وافي وكافي عن ${random(entities)}، ${random(impacts)}، ${random(closing)}`,
    () => `من أجمل ما شاهدت ${random(timeframes)}، ${random(subjects)} ${random(adjectives)} بـ ${random(qualities)} أسطوري.`
  ];

  try {
    const comment = random(templates)();
    return {
      statusCode: 200,
      body: JSON.stringify({ comment, version: "2.0.0", combinations: "1 Billion+" }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    };
  }
};
