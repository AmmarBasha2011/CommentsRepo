def calculate():
    # Word list sizes for V3
    prefixes = 30
    subjects = 40
    adjectives = 50
    gratitude = 35
    qualities = 45
    closing = 40
    entities = 35
    impacts = 40
    reactions = 25
    timeframes = 30
    origins = 40
    degrees = 15
    connectors = 12
    interjections = 15

    # Template Permutations (Slots)
    # T1: {pref} {deg} {subj} {adj} {time} {reac} {clos}
    t1 = prefixes * degrees * subjects * adjectives * timeframes * reactions * closing
    
    # T2: {grat} {subj} {adj} in {ent} {deg} {impact} {clos}
    t2 = gratitude * subjects * adjectives * entities * degrees * impacts * closing
    
    # T3: {interj} {subj} {adj} with {qual} and {qual} {origin} {clos}
    # (qual1 != qual2, so qualities * (qualities - 1))
    t3 = interjections * subjects * adjectives * (qualities * (qualities - 1)) * origins * closing
    
    # T4: {pref} {subj} {adj} {conn} {reac} {deg} {impact} {origin} {clos}
    t4 = prefixes * subjects * adjectives * connectors * reactions * degrees * impacts * origins * closing
    
    # T5: {interj} {deg} {adj} {subj} {time} {reac} {impact} {clos}
    t5 = interjections * degrees * adjectives * subjects * timeframes * reactions * impacts * closing

    total = t1 + t2 + t3 + t4 + t5
    
    print(f"Template 1: {t1:,}")
    print(f"Template 2: {t2:,}")
    print(f"Template 3: {t3:,}")
    print(f"Template 4: {t4:,}")
    print(f"Template 5: {t5:,}")
    print(f"-" * 30)
    print(f"Total Combinations: {total:,}")
    return total

if __name__ == "__main__":
    calculate()
