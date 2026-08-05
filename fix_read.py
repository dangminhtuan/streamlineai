import re

with open('content.js', 'r', encoding='utf-8') as f:
    content_js = f.read()

clear_match = re.search(r'function clearHighlights\(\) \{.*?\n  \}', content_js, re.DOTALL)
scan_match = re.search(r'function scanAndHighlightAPI\(forceScan = false\) \{.*?\n  \}', content_js, re.DOTALL)
radar_match = re.search(r'let lastHoveredWord = null;.*?function initRadarInspector\(\) \{.*?\n  \}', content_js, re.DOTALL)

if not (clear_match and scan_match and radar_match):
    print("Failed to extract")
    exit(1)

new_funcs = clear_match.group(0) + "\n\n" + scan_match.group(0) + "\n\n" + radar_match.group(0)

with open('read.js', 'r', encoding='utf-8') as f:
    read_lines = f.readlines()

# read.js lines 702 to 1115 are corrupted/old code. We just replace that block.
# Wait, python lines are 0-indexed. Lines 702 to 1115 -> indices 701 to 1114.
del read_lines[701:1115]

read_lines.insert(701, new_funcs + "\n")

with open('read.js', 'w', encoding='utf-8') as f:
    f.writelines(read_lines)

print("Fixed read.js!")
