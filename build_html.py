import sys, re

# Read original
with open('index.html', 'rb') as f:
    raw = f.read().decode('utf-8', errors='replace')

lines = raw.split('\n')
# The valid HTML is lines 0..344 (lines 1-345 in 1-based)
valid = '\n'.join(lines[:345])

# Extract main content: from line 14 (navbar) to line 283 (before bot-panel-overlay)
# We know:
#   navbar starts line 14 (idx 13)
#   everything up to the old bot-panel-overlay / float-chat-btn sections
# We'll extract between <body> and the old overlay elements

# Find position of floating button and old panels
float_btn_pos = valid.find('class="float-chat-btn"')
bot_overlay_pos = valid.find('class="bot-panel-overlay"')
# Use whichever comes first
start_cut = min(p for p in [float_btn_pos, bot_overlay_pos] if p != -1)

# Find the actual start of that line
line_start = valid.rfind('\n', 0, start_cut) + 1
main_content = valid[valid.find('\n', valid.find('<body>'))+1:line_start].strip()

print('Extracted main content length:', len(main_content))
print('Last 200 chars:', repr(main_content[-200:]))
