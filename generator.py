import random
import json

def generate_comments(count=1000000):
    prefixes = ["", "ما شاء الله، ", "سبحان الله، ", "تبارك الله، ", "بكل أمانة، ", "يا جماعة، ", "فعلاً، ", "بصراحة، "]
    adjectives = ["رائع", "مميز", "إبداعي", "أسطوري", "جميل", "مفيد", "هادف", "راقي", "احترافي", "عالمي", "مذهل", "خرافي", "تاريخي", "جبار", "نظيف"]
    subjects = ["فيديو", "محتوى", "مقطع", "شرح", "درس", "عمل", "مجهود", "طرح", "أسلوب", "إبداع", "درس تعليمي"]
    gratitude = ["شكراً على", "جزاك الله خيراً على", "بارك الله في مجهودك في", "كل التقدير لـ", "تحية لك على", "تسلم ايدك على", "شكراً جزيلاً لـ"]
    qualities = ["المونتاج", "التصوير", "الأداء", "التقديم", "المعلومات", "التنسيق", "الصوت", "الإضاءة", "اختيار المواضيع"]
    closing = ["استمر يا بطل!", "بالتوفيق دائماً.", "بانتظار الجديد.", "نحن معك.", "إلى الأمام!", "الله يوفقك.", "تحياتي لك.", "واصل الإبداع.", "قناتك كنز."]
    entities = ["البرمجة", "التقنية", "التطوير", "اليوتيوب", "صناعة المحتوى", "هذا المجال", "عالم التقنية"]
    impacts = ["استفدت كثيراً", "تعلمت أشياء جديدة", "حللت لي مشكلة كبيرة", "أعطيتني دافع قوي", "غيرت نظرتي للأمور", "بسطت لي المعلومة"]
    
    templates = [
        lambda: f"{random.choice(prefixes)}{random.choice(subjects)} {random.choice(adjectives)} جداً، {random.choice(closing)}",
        lambda: f"{random.choice(gratitude)} {random.choice(subjects)} الـ {random.choice(adjectives)}.",
        lambda: f"جودة {random.choice(qualities)} في تطور ملحوظ، {random.choice(closing)}",
        lambda: f"أفضل قناة تشرح {random.choice(entities)} بوضوح، {random.choice(impacts)}.",
        lambda: f"بارك الله فيك و{random.choice(['جعله في ميزان حسناتك', 'وفقك لما تحبه وترضاه', 'نفع بك', 'بارك في عمرك'])}.",
        lambda: f"أنا من أشد المعجبين بـ {random.choice(['أسلوبك', 'قناتك', 'محتواك', 'طريقتك'])}، {random.choice(closing)}",
        lambda: f"لقد {random.choice(impacts)} من هذا الـ {random.choice(subjects)}، شكراً لك.",
        lambda: f"تم الإعجاب والاشتراك، {random.choice(closing)}",
        lambda: f"تحية لك من القلب على هذا الـ {random.choice(subjects)} {random.choice(adjectives)}.",
        lambda: f"أنت {random.choice(['قدوة', 'مثال للمبدع', 'أسطورة', 'فنان', 'عبقري'])} في {random.choice(entities)}، {random.choice(closing)}",
        lambda: f"{random.choice(subjects)} {random.choice(adjectives)} من الألف إلى الياء، {random.choice(impacts)}.",
        lambda: f"دائماً ما تقدم لنا الأفضل، {random.choice(closing)} {random.choice(prefixes)}",
        lambda: f"لا أتخيل يومي بدون متابعة جديدك في {random.choice(entities)}.",
        lambda: f"بكل أمانة، أنت الأفضل في مجال {random.choice(entities)} بلا منازع.",
        lambda: f"شرح وافي وكافي، {random.choice(impacts)}، {random.choice(closing)}"
    ]

    comments = set()
    print(f"Starting generation of {count} comments...")
    while len(comments) < count:
        comments.add(random.choice(templates)())
        if len(comments) % 100000 == 0:
            print(f"Generated {len(comments)} comments...")
    
    return list(comments)

if __name__ == "__main__":
    comments_list = generate_comments(1000000)
    print(f"Saving to comments.json... this may take a moment.")
    with open("comments.json", "w", encoding="utf-8") as f:
        json.dump(comments_list, f, ensure_ascii=False)
    print(f"Successfully saved 1,000,000 comments to comments.json")
