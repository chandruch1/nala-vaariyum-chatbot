# Streamlit Modern Chatbot UI
# Updated: Tamil + English Answers

import streamlit as st
import google.generativeai as genai
from pypdf import PdfReader
from dotenv import load_dotenv
import os

# -------------------------
# CONFIG
# -------------------------
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

st.set_page_config(
    page_title="Nallavarriyum Chatbot",
    page_icon="🤖",
    layout="wide"
)

# -------------------------
# ALLOW IFRAME EMBEDDING
# (Removes X-Frame-Options so website can embed this chatbot)
# -------------------------
st.markdown("""
<script>
// Allow this page to be embedded in the parent welfare website
if (window.self !== window.top) {
    document.documentElement.style.setProperty('--embed-mode', '1');
}
</script>
""", unsafe_allow_html=True)

# -------------------------
# CSS CLEAN UI
# -------------------------
st.markdown("""
<style>

#MainMenu, header, footer {
    visibility:hidden;
}

html, body, [data-testid="stAppViewContainer"] {
    background:#f4f6fb;
}

.block-container {
    padding:0rem;
}

.topbar {
    background:#3b82f6;
    color:white;
    padding:18px;
    font-size:28px;
    font-weight:700;
    text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,0.08);
}

.chat-wrapper {
    height:78vh;
    overflow-y:auto;
    padding:25px;
    padding-bottom:120px;
}

.bot-msg {
    background:white;
    color:#111;
    padding:14px 18px;
    border-radius:16px;
    width:fit-content;
    max-width:75%;
    margin-bottom:14px;
    box-shadow:0 2px 8px rgba(0,0,0,0.06);
    font-size:18px;
    line-height:1.6;
}

.user-msg {
    background:#3b82f6;
    color:white;
    padding:14px 18px;
    border-radius:16px;
    width:fit-content;
    max-width:70%;
    margin-left:auto;
    margin-bottom:14px;
    font-size:18px;
}

.stChatInput {
    position:fixed;
    bottom:20px;
    left:20px;
    right:20px;
}

.stChatInput input {
    border-radius:14px !important;
    padding:16px !important;
    font-size:18px !important;
}

</style>
""", unsafe_allow_html=True)

# -------------------------
# PDF LOAD
# -------------------------
@st.cache_data
def load_pdf():
    reader = PdfReader("Welfare_Schemes_Compiled(2).pdf")
    text = ""

    for page in reader.pages:
        txt = page.extract_text()
        if txt:
            text += txt + "\n"

    return text

pdf_text = load_pdf()

# -------------------------
# SESSION
# -------------------------
if "messages" not in st.session_state:
    st.session_state.messages = [
        ("assistant", "Hi there! வணக்கம்! How can I help you today?")
    ]

# -------------------------
# HEADER
# -------------------------
st.markdown(
    '<div class="topbar">🤖 Nallavarriyum Welfare Chatbot</div>',
    unsafe_allow_html=True
)

# -------------------------
# CHAT DISPLAY
# -------------------------
st.markdown('<div class="chat-wrapper">', unsafe_allow_html=True)

for role, msg in st.session_state.messages:

    if role == "assistant":
        st.markdown(
            f'<div class="bot-msg">{msg}</div>',
            unsafe_allow_html=True
        )
    else:
        st.markdown(
            f'<div class="user-msg">{msg}</div>',
            unsafe_allow_html=True
        )

st.markdown('</div>', unsafe_allow_html=True)

# -------------------------
# INPUT
# -------------------------
question = st.chat_input("Ask your question... / உங்கள் கேள்வியை கேளுங்கள்...")

# -------------------------
# BOT RESPONSE
# -------------------------
if question:

    st.session_state.messages.append(("user", question))

    prompt = f"""
You are Nallavarriyum Welfare Assistant.

Use ONLY the given PDF information.

Rules:

1. If user asks Explain / What is / Tell me about:
→ Give short summary in BOTH English and Tamil.

2. If user asks Eligibility:
→ Give only eligibility in BOTH English and Tamil.

3. If user asks Documents:
→ Give only required documents in BOTH English and Tamil.

4. If user asks Amount / Benefit:
→ Give only benefit amount in BOTH English and Tamil.

5. If user asks Full details:
→ Give:
• Description
• Benefit Amount
• Eligibility
• Required Documents
in BOTH English and Tamil.

6. If answer not found:
English: Not available in document.
Tamil: இந்த ஆவணத்தில் தகவல் இல்லை.

7. Format:

English:
<answer>

Tamil:
<answer>

8. Keep answer clean, chatbot style.

PDF DATA:
{pdf_text}

User Question:
{question}

Answer:
"""

    with st.spinner("Thinking..."):
        try:
            response = model.generate_content(prompt)
            answer = response.text
        except Exception as e:
            answer = f"Error: {str(e)}"

    st.session_state.messages.append(("assistant", answer))
    st.rerun()