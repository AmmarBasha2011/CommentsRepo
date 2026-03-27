exports.handler = async (event, context) => {
  const prefixes = ["", "ما شاء الله، ", "سبحان الله، ", "تبارك الله، ", "بكل أمانة، ", "يا جماعة، ", "فعلاً، ", "بصراحة، "];
  const adjectives = ["رائع", "مميز", "إبداعي", "أسطوري", "جميل", "مفيد", "هادف", "راقي", "احترافي", "عالمي", "مذهل", "خرافي", "تاريخي", "جبار", "نظيف"];
  const subjects = ["فيديو", "محتوى", "مقطع", "شرح", "درس", "عمل", "مجهود", "طرح", "أسلوب", "إبداع", "درس تعليمي"];
  const gratitude = ["شكراً على", "جزاك الله خيراً على", "بارك الله في مجهودك في", "كل التقدير لـ", "تحية لك على", "تسلم ايدك على", "شكراً جزيلاً لـ"];
  const qualities = ["المونتاج", "التصوير", "الأداء", "التقديم", "المعلومات", "التنسيق", "الصوت", "الإضاءة", "اختيار المواضيع"];
  const closing = ["استمر يا بطل!", "بالتوفيق دائماً.", "بانتظار الجديد.", "نحن معك.", "إلى الأمام!", "الله يوفقك.", "تحياتي لك.", "واصل الإبداع.", "قناتك كنز."];
  const entities = ["البرمجة", "التقنية", "التطوير", "اليوتيوب", "صناعة المحتوى", "هذا المجال", "عالم التقنية"];
  const impacts = ["استفدت كثيراً", "تعلمت أشياء جديدة", "حللت لي مشكلة كبيرة", "أعطيتني دافع قوي", "غيرت نظرتي للأمور", "بسطت لي المعلومة"];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const templates = [
    () => `${random(prefixes)}${random(subjects)} ${random(adjectives)} جداً، ${random(closing)}`,
    () => `${random(gratitude)} ${random(subjects)} الـ ${random(adjectives)}.`,
    () => `جودة ${random(qualities)} في تطور ملحوظ، ${random(closing)}`,
    () => `أفضل قناة تشرح ${random(entities)} بوضوح، ${random(impacts)}.`,
    () => `بارك الله فيك و${random(['جعله في ميزان حسناتك', 'وفقك لما تحبه وترضاه', 'نفع بك', 'بارك في عمرك'])}.`,
    () => `أنا من أشد المعجبين بـ ${random(['أسلوبك', 'قناتك', 'محتواك', 'طريقتك'])}، ${random(closing)}`,
    () => `لقد ${random(impacts)} من هذا الـ ${random(subjects)}، شكراً لك.`,
    () => `تم الإعجاب والاشتراك، ${random(closing)}`,
    () => `تحية لك من القلب على هذا الـ ${random(subjects)} ${random(adjectives)}.`,
    () => `أنت ${random(['قدوة', 'مثال للمبدع', 'أسطورة', 'فنان', 'عبقري'])} في ${random(entities)}، ${random(closing)}`,
    () => `${random(subjects)} ${random(adjectives)} من الألف إلى الياء، ${random(impacts)}.`,
    () => `دائماً ما تقدم لنا الأفضل، ${random(closing)} ${random(prefixes)}`,
    () => `لا أتخيل يومي بدون متابعة جديدك في ${random(entities)}.`,
    () => `بكل أمانة، أنت الأفضل في مجال ${random(entities)} بلا منازع.`,
    () => `شرح وافي وكافي، ${random(impacts)}، ${random(closing)}`
  ];

  try {
    const comment = random(templates)();
    return {
      statusCode: 200,
      body: JSON.stringify({ comment }),
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
