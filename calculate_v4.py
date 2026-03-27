def calculate():
    # Word list sizes for V4
    prefixes = 45
    subjects = 60
    adjectives = 75
    gratitude = 55
    qualities = 70
    closing = 65
    entities = 55
    impacts = 65
    reactions = 45
    timeframes = 50
    origins = 65
    degrees = 25
    connectors = 20
    interjections = 35
    emojis = 40

    # Template Permutations (Slots)
    # T1: {pref} {interj} {deg} {subj} {adj} {time} {reac} {clos} {emoji}
    t1 = prefixes * interjections * degrees * subjects * adjectives * timeframes * reactions * closing * emojis
    
    # T2: {grat} {subj} {adj} in {ent} {deg} {impact} {origin} {reac} {clos}
    t2 = gratitude * subjects * adjectives * entities * degrees * impacts * origins * reactions * closing
    
    # T3: {interj} {subj} {adj} with {qual1} and {qual2} {origin} {time} {reac} {clos}
    t3 = interjections * subjects * adjectives * (qualities * (qualities - 1)) * origins * timeframes * reactions * closing
    
    # T4: {pref} {interj} {subj} {adj} {conn} {reac} {deg} {impact} {origin} {clos} {emoji}
    t4 = prefixes * interjections * subjects * adjectives * connectors * reactions * degrees * impacts * origins * closing * emojis

    total = t1 + t2 + t3 + t4
    
    print(f"Template 1: {t1:,}")
    print(f"Template 2: {t2:,}")
    print(f"Template 3: {t3:,}")
    print(f"Template 4: {t4:,}")
    print(f"-" * 40)
    print(f"Total Combinations: {total:,}")
    return total

if __name__ == "__main__":
    calculate()
