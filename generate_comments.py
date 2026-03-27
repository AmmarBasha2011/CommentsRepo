import random
import json

def generate_comments(count=100000):
    adjectives = ["رائع", "مميز", "إبداعي", "أسطوري", "جميل", "مفيد", "هادف", "راقي", "احترافي", "عالمي"]
    subjects = ["فيديو", "محتوى", "مقطع", "شرح", "درس", "عمل", "مجهود"]
    gratitude = ["شكراً على", "جزاك الله خيراً على", "بارك الله في مجهودك في", "كل التقدير لـ", "تحية لك على"]
    qualities = ["المونتاج", "التصوير", "الأداء", "التقديم", "المعلومات", "التنسيق"]
    closing = ["استمر يا بطل!", "بالتوفيق دائماً.", "بانتظار الجديد.", "نحن معك.", "إلى الأمام!", "الله يوفقك."]
    entities = ["البرمجة", "التقنية", "التطوير", "اليوتيوب", "صناعة المحتوى"]
    impacts = ["استفدت كثيراً", "تعلمت أشياء جديدة", "حللت لي مشكلة كبيرة", "أعطيتني دافع قوي"]
    
    templates = [
        lambda: f"{random.choice(subjects)} {random.choice(adjectives)} جداً، {random.choice(closing)}",
        lambda: f"{random.choice(gratitude)} {random.choice(subjects)} الـ {random.choice(adjectives)}.",
        lambda: f"جودة {random.choice(qualities)} في تطور ملحوظ، {random.choice(closing)}",
        lambda: f"أفضل قناة تشرح {random.choice(entities)} بوضوح، {random.choice(impacts)}.",
        lambda: f"بارك الله فيك و{random.choice(['جعله في ميزان حسناتك', 'وفقك لما تحبه وترضاه', 'نفع بك'])}.",
        lambda: f"أنا من أشد المعجبين بـ {random.choice(['أسلوبك', 'قناتك', 'محتواك'])}، {random.choice(closing)}",
        lambda: f"لقد {random.choice(impacts)} من هذا الـ {random.choice(subjects)}، شكراً لك.",
        lambda: f"تم الإعجاب والاشتراك، {random.choice(closing)}",
        lambda: f"تحية لك من القلب على هذا الـ {random.choice(subjects)} {random.choice(adjectives)}.",
        lambda: f"أنت {random.choice(['قدوة', 'مثال للمبدع', 'أسطورة', 'فنان'])}، {random.choice(closing)}",
        lambda: f"{random.choice(subjects)} {random.choice(adjectives)} من الألف إلى الياء.",
        lambda: f"دائماً ما تقدم لنا الأفضل، {random.choice(closing)}",
        lambda: f"لا أتخيل يومي بدون متابعة جديدك في {random.choice(entities)}.",
        lambda: f"بكل أمانة، أنت الأفضل في مجال {random.choice(entities)}.",
        lambda: f"شرح وافي وكافي، {random.choice(impacts)}."
    ]

    comments = set()
    while len(comments) < count:
        comments.add(random.choice(templates)())
    
    return list(comments)

if __name__ == "__main__":
    print(f"Generating 100,000 comments...")
    comments_list = generate_comments(100000)
    with open("comments.json", "w", encoding="utf-8") as f:
        json.dump(comments_list, f, ensure_ascii=False, indent=2)
    print(f"Successfully saved 100,000 comments to comments.json")
