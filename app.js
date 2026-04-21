// ============================================================
//  நலவறியும் – Welfare Portal JavaScript
//  All data from: Welfare_Schemes_Compiled(2).pdf
// ============================================================

/* ============================================================
   DATA – Extracted from PDF
   ============================================================ */

const SCHEMES = [
  {
    id: "book-allowance",
    icon: "📚",
    iconBg: "icon-bg-edu",
    tamilName: "புத்தக உதவித்தொகை திட்டம்",
    englishName: "Book Allowance Scheme",
    category: "கல்வி உதவி",
    categoryClass: "cat-edu",
    description: "தகுதியான தொழிலாளரின் ஒரு குழந்தைக்கு புத்தகங்கள் வாங்குவதற்கு நிதி உதவி வழங்கப்படும்.",
    benefitAmount: "₹1,000 – ₹3,000",
    benefitDetail: [
      "மேல்நிலை வகுப்பு (12th): ₹1,000",
      "டிப்ளோமா: ₹1,500",
      "இளநிலை பட்டப்படிப்பு (UG): ₹2,000",
      "முதுநிலை பட்டப்படிப்பு (PG): ₹3,000"
    ],
    beneficiary: "தகுதியான தொழிலாளரின் குழந்தை",
    deadline: "டிசம்பர் 31",
    eligibility: [
      "தொழிலாளரின் வயது 60 ஆண்டுகளுக்கு உட்பட்டதாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "அதிகபட்ச சம்பளம் ₹35,000 (அடிப்படை ஊதியம் + DA)",
      "ஒரு கல்வியாண்டில் அதிகபட்சம் ஒரு குழந்தை மட்டுமே"
    ],
    documents: [
      "கல்வி நிறுவனம் வழங்கிய Original Bonafide சான்றிதழ்",
      "புத்தகங்கள் வாங்கிய Original ரசீது",
      "தொழிலாளரின் ஆதார் அட்டை",
      "மாணவரின் ஆதார் அட்டை",
      "ரேஷன் கார்டு",
      "LWF கட்டண ரசீது",
      "கடந்த மாத சம்பள சீட்டு",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "தொழிலாளரின் வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "ஒவ்வொரு ஆண்டும் டிசம்பர் 31-க்கு முன்பாக விண்ணப்பிக்க வேண்டும்."
  },
  {
    id: "educational-assistance",
    icon: "🎓",
    iconBg: "icon-bg-edu",
    tamilName: "கல்வி உதவித்தொகை திட்டம்",
    englishName: "Educational Assistance Scheme",
    category: "கல்வி உதவி",
    categoryClass: "cat-edu",
    description: "பள்ளி, டிப்ளோமா, UG மற்றும் PG படிக்கும் தொழிலாளர் குழந்தைகளுக்கு நிதி உதவி வழங்கப்படும்.",
    benefitAmount: "₹1,000 – ₹12,000",
    benefitDetail: [
      "PG Professional படிப்பு: ₹12,000",
      "UG Professional படிப்பு: ₹8,000",
      "டிப்ளோமா: ₹5,000",
      "ITI / மேல்நிலை (10th, 11th, 12th): ₹4,000",
      "9th & 10th வகுப்பு: ₹3,000",
      "6th to 8th வகுப்பு: ₹2,000",
      "Pre-KG to 5th வகுப்பு: ₹1,000"
    ],
    beneficiary: "தகுதியான தொழிலாளரின் குழந்தை",
    deadline: "டிசம்பர் 31",
    eligibility: [
      "தொழிலாளரின் வயது 60 ஆண்டுகளுக்கு உட்பட்டதாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "அதிகபட்ச சம்பளம் ₹35,000",
      "ஒரு கல்வியாண்டில் அதிகபட்சம் ஒரு குழந்தை மட்டுமே",
      "மாணவர் முந்தைய தேர்வில் arrear இல்லாமல் தேர்ச்சி பெற வேண்டும்",
      "நடப்பு ஆண்டு டிசம்பர் 31-க்கு முன்பு விண்ணப்பிக்க வேண்டும்"
    ],
    documents: [
      "Original Bonafide சான்றிதழ்",
      "மதிப்பெண் பட்டியல் நகல்",
      "தொழிலாளரின் ஆதார் அட்டை",
      "மாணவரின் ஆதார் அட்டை",
      "ரேஷன் கார்டு",
      "LWF கட்டண ரசீது",
      "கடந்த மாத சம்பள சீட்டு",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "தொழிலாளரின் வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "மாணவர் அந்த ஆண்டு கல்வி நிறுவனத்தில் பதிவு செய்திருக்க வேண்டும்."
  },
  {
    id: "educational-incentive",
    icon: "🏆",
    iconBg: "icon-bg-merit",
    tamilName: "கல்வி ஊக்கத்தொகை திட்டம்",
    englishName: "Educational Incentive Scheme",
    category: "மெரிட் விருது",
    categoryClass: "cat-merit",
    description: "மாவட்டத்தில் 10th அல்லது 12th பொதுத்தேர்வில் முதல் 10 இடங்களில் வரும் தொழிலாளர் குழந்தைகளுக்கு ஊக்கத்தொகை.",
    benefitAmount: "₹2,000 – ₹3,000",
    benefitDetail: [
      "10th தரநிலை: ₹2,000",
      "12th தரநிலை: ₹3,000"
    ],
    beneficiary: "தகுதியான தொழிலாளரின் குழந்தை",
    deadline: "டிசம்பர் 31",
    eligibility: [
      "தொழிலாளரின் வயது 60 ஆண்டுகளுக்கு உட்பட்டதாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "மாணவர் மாவட்டத்தில் முதல் 10 இடங்களில் வந்திருக்க வேண்டும்",
      "ஒரு கல்வியாண்டில் ஒரு குழந்தை மட்டுமே"
    ],
    documents: [
      "10th / 12th மதிப்பெண் பட்டியல் நகல்",
      "தொழிலாளரின் ஆதார் அட்டை",
      "மாணவரின் ஆதார் அட்டை",
      "ரேஷன் கார்டு",
      "LWF கட்டண ரசீது",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "தொழிலாளரின் வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "மாவட்ட அளவில் முதல் 10 இடங்களில் வரும் மாணவர்களுக்கு மட்டுமே இந்த ஊக்கத்தொகை கிடைக்கும்."
  },
  {
    id: "marriage-assistance",
    icon: "💍",
    iconBg: "icon-bg-marriage",
    tamilName: "திருமண உதவித்தொகை திட்டம்",
    englishName: "Marriage Scheme Assistance",
    category: "திருமண நலன்",
    categoryClass: "cat-marriage",
    description: "தகுதியான தொழிலாளருக்கோ அல்லது அவர்கள் குடும்பத்தினருக்கோ திருமணத்திற்கு நிதி உதவி வழங்கப்படும்.",
    benefitAmount: "₹20,000",
    benefitDetail: ["திருமண உதவித்தொகை: ₹20,000"],
    beneficiary: "தகுதியான தொழிலாளர் அல்லது குடும்பத்தினர்",
    deadline: "திருமண தேதியிலிருந்து 3 மாதங்களுக்கு உள்",
    eligibility: [
      "தொழிலாளரின் வயது 60 ஆண்டுகளுக்கு உட்பட்டதாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "அதிகபட்ச சம்பளம் ₹35,000",
      "திருமண தேதியிலிருந்து 3 மாதங்களுக்கு உள்ளாக விண்ணப்பிக்க வேண்டும்",
      "திருமணம் பதிவு செய்யப்பட்டிருக்க வேண்டும்",
      "குடும்பத்தில் ஒரே ஒரு தகுதியான தொழிலாளர் மட்டுமே விண்ணப்பிக்க முடியும்"
    ],
    documents: [
      "திருமண பதிவு சான்றிதழ்",
      "Original திருமண அழைப்பிதழ்",
      "தொழிலாளரின் ஆதார் அட்டை",
      "மணமகளின் ஆதார் அட்டை",
      "மணமகனின் ஆதார் அட்டை",
      "ரேஷன் கார்டு",
      "LWF கட்டண ரசீது",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "கடந்த மாத சம்பள சீட்டு",
      "தொழிலாளரின் வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "திருமணம் பதிவு செய்யப்பட்டிருக்க வேண்டியது அவசியம். குடும்பத்தில் இரண்டு தொழிலாளர்கள் இருந்தாலும், ஒருவர் மட்டுமே விண்ணப்பிக்க முடியும்."
  },
  {
    id: "natural-death",
    icon: "🕊️",
    iconBg: "icon-bg-death",
    tamilName: "இயற்கை மரண மற்றும் இறுதிச் சடங்கு உதவித்தொகை",
    englishName: "Natural Death and Funeral Scheme Assistance",
    category: "மரண நலன்",
    categoryClass: "cat-death",
    description: "தகுதியான தொழிலாளர் இயற்கையாக மரணடைந்தால், அவரது சட்டபூர்வமான வாரிசுகளுக்கு நிதி உதவி வழங்கப்படும்.",
    benefitAmount: "மொத்தம் ₹55,000",
    benefitDetail: [
      "இயற்கை மரண உதவி: ₹50,000",
      "இறுதிச் சடங்கு செலவு: ₹5,000",
      "மொத்தம்: ₹55,000"
    ],
    beneficiary: "மரணமடைந்த தொழிலாளரின் சட்டபூர்வமான வாரிசு",
    deadline: "மரண தேதியிலிருந்து 12 மாதங்களுக்கு உள்",
    eligibility: [
      "தொழிலாளரின் வயது அதிகபட்சம் 60 ஆண்டுகள்",
      "சம்பளம் ₹35,000-க்கு குறைவாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "மரண தேதியிலிருந்து 12 மாதங்களுக்கு உள்ளாக விண்ணப்பிக்க வேண்டும்"
    ],
    documents: [
      "மரண சான்றிதழ்",
      "வாரிசு சான்றிதழ் (Legal Heir Certificate)",
      "தேவைப்பட்டால் NOC",
      "மரணமடைந்த தொழிலாளரின் ஆதார் அட்டை",
      "மரணமடைந்த தொழிலாளரின் ரேஷன் கார்டு",
      "விண்ணப்பதாரரின் ஆதார் அட்டை",
      "விண்ணப்பதாரரின் ரேஷன் கார்டு",
      "LWF கட்டண ரசீது",
      "கடைசி மாத சம்பள சீட்டு",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "இயற்கை மரணம் மட்டும் (விபத்து மரணம் அல்ல). சட்டபூர்வமான வாரிசு மட்டுமே விண்ணப்பிக்க முடியும்."
  },
  {
    id: "spectacles-reimbursement",
    icon: "👓",
    iconBg: "icon-bg-medical",
    tamilName: "கண்ணாடி செலவு திரும்பப் பெறும் திட்டம்",
    englishName: "Reimbursement of Cost of Spectacles Scheme",
    category: "மருத்துவ உதவி",
    categoryClass: "cat-medical",
    description: "தகுதியான தொழிலாளருக்கு கண்ணாடி வாங்குவதற்கான செலவை திரும்பப் பெறும் திட்டம்.",
    benefitAmount: "₹1,000 வரை",
    benefitDetail: [
      "₹1,000 அல்லது உண்மையான செலவு, எது குறைவோ அது வழங்கப்படும்"
    ],
    beneficiary: "தகுதியான தொழிலாளர்",
    deadline: "சேவை காலத்தில் ஒரு முறை மட்டும்",
    eligibility: [
      "தொழிலாளரின் வயது 60 ஆண்டுகளுக்கு உட்பட்டதாக இருக்க வேண்டும்",
      "முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்",
      "அதிகபட்ச சம்பளம் ₹35,000",
      "சேவைக் காலத்தில் ஒரே ஒரு முறை மட்டும் பெற முடியும்"
    ],
    documents: [
      "மருத்துவர் prescription",
      "கண்ணாடி வாங்கிய Original ரசீது",
      "ஆதார் அட்டை",
      "ரேஷன் கார்டு",
      "LWF கழிவு காட்டும் சம்பள சீட்டு",
      "LWF கட்டண ரசீது",
      "கடந்த மாத சம்பள சீட்டு",
      "வங்கி பாஸ்புக் முன் பக்கம் (2 நகல்)"
    ],
    special: "ஒரு தொழிலாளர் தனது முழு சேவை காலத்திலும் இந்த திட்டத்தை ஒரே ஒரு முறை மட்டுமே பெற முடியும்."
  }
];

/* ============================================================
   FAQ DATA – Extracted from PDF
   ============================================================ */
const FAQS = [
  {
    q: "யார் LWF திட்டங்களுக்கு விண்ணப்பிக்கலாம்?",
    a: "தமிழ்நாட்டில் முந்தைய ஆண்டு LWF (Labour Welfare Fund) கட்டணம் செலுத்தியுள்ள, 60 ஆண்டுகளுக்கு உட்பட்ட தொழிலாளர்கள், அவர்களின் சம்பளம் ₹35,000-க்கு (அடிப்படை ஊதியம் + DA) குறைவாக இருந்தால் விண்ணப்பிக்கலாம்."
  },
  {
    q: "LWF கட்டணம் எப்படி செலுத்துவது?",
    a: "LWF கட்டணம் பொதுவாக தொழிலாளரின் சம்பாரிலிருந்து தானாகவே கழிக்கப்படும். சம்பள சீட்டில் LWF deduction பார்க்கலாம். கட்டணம் செலுத்திய ரசீதை வைத்திருக்க வேண்டும்."
  },
  {
    q: "கல்வி உதவிக்கு எவ்வளவு தொகை கிடைக்கும்?",
    a: "படிப்பு அளவைப் பொறுத்து கிடைக்கும்: Pre-KG to 5th: ₹1,000 | 6th-8th: ₹2,000 | 9th-10th: ₹3,000 | ITI/Higher Secondary: ₹4,000 | Diploma: ₹5,000 | UG Professional: ₹8,000 | PG Professional: ₹12,000"
  },
  {
    q: "திருமண உதவிக்கு கடைசி தேதி என்ன?",
    a: "திருமண தேதியிலிருந்து 3 மாதங்களுக்கு உள்ளாக விண்ணப்பிக்க வேண்டும். திருமணம் பதிவு செய்யப்பட்டிருக்க வேண்டும். உதவித்தொகை ₹20,000."
  },
  {
    q: "மரண உதவிக்கு யார் விண்ணப்பிக்கலாம்?",
    a: "மரணமடைந்த தொழிலாளரின் சட்டபூர்வமான வாரிசு (Legal Heir) விண்ணப்பிக்கலாம். மரண தேதியிலிருந்து 12 மாதங்களுக்கு உள்ளாக விண்ணப்பிக்க வேண்டும். மொத்த உதவி: ₹55,000 (₹50,000 மரண உதவி + ₹5,000 இறுதிச் சடங்கு)."
  },
  {
    q: "புத்தக உதவிக்கு என்ன ஆவணங்கள் தேவை?",
    a: "கல்வி நிறுவன Bonafide சான்றிதழ், புத்தகங்கள் வாங்கிய Original ரசீது, ஆதார் அட்டை (தொழிலாளர் + மாணவர்), ரேஷன் கார்டு, LWF ரசீது, சம்பள சீட்டு மற்றும் வங்கி பாஸ்புக் தேவை."
  },
  {
    q: "கண்ணாடி உதவி எத்தனை முறை பெறலாம்?",
    a: "கண்ணாடி (Spectacles) உதவி ஒரு தொழிலாளர் தனது முழு சேவை காலத்திலும் ஒரே ஒரு முறை மட்டுமே பெற முடியும். அதிகபட்ச தொகை ₹1,000."
  },
  {
    q: "கல்வி ஊக்கத்தொகை (Merit) எப்படி கிடைக்கும்?",
    a: "10th அல்லது 12th பொதுத்தேர்வில் மாவட்ட அளவில் முதல் 10 இடங்களில் வரும் தொழிலாளர் குழந்தைகளுக்கு கிடைக்கும். 10th: ₹2,000 | 12th: ₹3,000."
  },
  {
    q: "அனைத்து திட்டங்களுக்கும் கடைசி தேதி ஒரே நாளா?",
    a: "கல்வி மற்றும் புத்தக திட்டங்களுக்கு ஒவ்வோர் ஆண்டும் டிசம்பர் 31 கடைசி தேதி. திருமண திட்டத்திற்கு திருமண தேதியிலிருந்து 3 மாதங்கள். மரண திட்டத்திற்கு மரண தேதியிலிருந்து 12 மாதங்கள். கண்ணாடி திட்டத்திற்கு குறிப்பிட்ட தேதி இல்லை, சேவை காலத்தில் ஒரு முறை."
  },
  {
    q: "ஒரே ஆண்டில் பல திட்டங்களுக்கு விண்ணப்பிக்கலாமா?",
    a: "ஆம், தகுதி இருந்தால் ஒரே ஆண்டில் கல்வி உதவி, புத்தக உதவி மற்றும் திருமண உதவி போன்ற பல திட்டங்களுக்கு தனித்தனியாக விண்ணப்பிக்கலாம். ஆனால் கல்வி உதவிக்கு ஒரே ஒரு குழந்தை மட்டுமே தகுதி."
  }
];

/* ============================================================
   CHATBOT KNOWLEDGE BASE
   ============================================================ */
const KB = {
  திட்டங்கள்: `6 நலத்திட்டங்கள் உள்ளன:
1. புத்தக உதவித்தொகை (₹1,000–₹3,000)
2. கல்வி உதவித்தொகை (₹1,000–₹12,000)
3. கல்வி ஊக்கத்தொகை (₹2,000–₹3,000)
4. திருமண உதவித்தொகை (₹20,000)
5. மரண உதவித்தொகை (₹55,000)
6. கண்ணாடி உதவி (₹1,000 வரை)`,

  தகுதி: `பொதுவான தகுதி:\n• வயது 60-க்குள் இருக்க வேண்டும்\n• சம்பளம் ₹35,000-க்கு குறைவாக இருக்க வேண்டும் (Basic + DA)\n• முந்தைய ஆண்டு LWF கட்டணம் செலுத்தியிருக்க வேண்டும்`,

  ஆவணங்கள்: `பொதுவான ஆவணங்கள்:\n• ஆதார் அட்டை (Employee + Family)\n• ரேஷன் கார்டு\n• LWF ரசீது\n• சம்பள சீட்டு\n• வங்கி பாஸ்புக் (முன் பக்கம்)\n• (திட்டத்திற்கேற்ப கூடுதல் ஆவணங்கள்)`,

  தொகை: `திட்டவாரியான தொகை:\n• புத்தகம்: ₹1,000–₹3,000\n• கல்வி: ₹1,000–₹12,000\n• ஊக்கம்: ₹2,000–₹3,000\n• திருமணம்: ₹20,000\n• மரணம்: ₹55,000 (₹50,000 + ₹5,000)\n• கண்ணாடி: ₹1,000 வரை`,

  கல்வி: `கல்வி உதவித்தொகை:\n• Pre-KG–5th: ₹1,000\n• 6th–8th: ₹2,000\n• 9th–10th: ₹3,000\n• ITI/12th: ₹4,000\n• Diploma: ₹5,000\n• UG: ₹8,000\n• PG: ₹12,000\nகடைசி தேதி: டிசம்பர் 31`,

  திருமணம்: `திருமண உதவி:\n• தொகை: ₹20,000\n• திருமணம் பதிவாகியிருக்க வேண்டும்\n• திருமண தேதியிலிருந்து 3 மாதங்களுக்குள் விண்ணப்பிக்க வேண்டும்\n• ஒரு குடும்பத்திலிருந்து ஒருவர் மட்டுமே விண்ணப்பிக்கலாம்`,

  மரணம்: `மரண உதவி:\n• மொத்தம்: ₹55,000\n  - இயற்கை மரண உதவி: ₹50,000\n  - இறுதிச் சடங்கு: ₹5,000\n• சட்டபூர்வமான வாரிசு விண்ணப்பிக்கலாம்\n• மரண தேதியிலிருந்து 12 மாதங்களுக்குள் விண்ணப்பிக்க வேண்டும்`,

  கண்ணாடி: `கண்ணாடி உதவி:\n• தொகை: ₹1,000 வரை (actual cost or ₹1,000, whichever is lower)\n• சேவை காலத்தில் ஒரே ஒரு முறை\n• மருத்துவர் prescription தேவை`,

  புத்தகம்: `புத்தக உதவித்தொகை:\n• மேல்நிலை (12th): ₹1,000\n• Diploma: ₹1,500\n• UG: ₹2,000\n• PG: ₹3,000\n• ஒரு குழந்தை மட்டுமே\n• கடைசி தேதி: டிசம்பர் 31`,

  default: `நான் கீழ்கண்ட தகவல்கள் பற்றி பதிலளிக்க முடியும்:\n\n📋 திட்டங்கள் பட்டியல்\n💰 உதவித்தொகை விவரங்கள்\n✅ தகுதி நிபந்தனைகள்\n📄 ஆவணங்கள் பட்டியல்\n📅 கடைசி தேதிகள்\n\nகீழ்கண்ட வார்த்தைகளை பயன்படுத்தி கேளுங்கள்:\nகல்வி, திருமணம், மரணம், கண்ணாடி, புத்தகம், தகுதி, ஆவணங்கள், தொகை`
};

/* ============================================================
   RENDER SCHEMES
   ============================================================ */
function renderSchemes(data) {
  const grid = document.getElementById('schemesGrid');
  const noResult = document.getElementById('noResults');

  if (!data || data.length === 0) {
    grid.innerHTML = '';
    noResult.classList.remove('hidden');
    return;
  }

  noResult.classList.add('hidden');
  grid.innerHTML = data.map(s => `
    <div class="scheme-card" onclick="openModal('${s.id}')" tabindex="0" role="button" aria-label="${s.tamilName}">
      <div class="card-header">
        <div class="card-icon ${s.iconBg}">${s.icon}</div>
        <div class="card-title-wrap">
          <div class="card-ta-name">${s.tamilName}</div>
          <div class="card-en-name">${s.englishName}</div>
        </div>
      </div>
      <span class="card-category ${s.categoryClass}">${s.category}</span>
      <p class="card-desc">${s.description}</p>
      <div class="card-info-grid">
        <div class="card-info-item">
          <div class="info-label">உதவித்தொகை</div>
          <div class="info-value">${s.benefitAmount}</div>
        </div>
        <div class="card-info-item">
          <div class="info-label">பயனாளி</div>
          <div class="info-value">${s.beneficiary.length > 30 ? s.beneficiary.slice(0, 28) + '…' : s.beneficiary}</div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-deadline">⏰ ${s.deadline}</span>
        <button class="view-btn" onclick="event.stopPropagation(); openModal('${s.id}')">மேலும் காண்க →</button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   SEARCH
   ============================================================ */
function filterSchemes() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('visible', q.length > 0);

  if (!q) { renderSchemes(SCHEMES); return; }

  const filtered = SCHEMES.filter(s =>
    s.tamilName.toLowerCase().includes(q) ||
    s.englishName.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );
  renderSchemes(filtered);
  document.getElementById('schemes').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  renderSchemes(SCHEMES);
}

function quickSearch(term) {
  document.getElementById('searchInput').value = term;
  filterSchemes();
  document.getElementById('schemes').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const s = SCHEMES.find(x => x.id === id);
  if (!s) return;

  const content = `
    <div class="modal-header">
      <span class="modal-icon">${s.icon}</span>
      <div class="modal-ta-title">${s.tamilName}</div>
      <div class="modal-en-title">${s.englishName} | <span class="modal-tag ${s.categoryClass}">${s.category}</span></div>
    </div>
    <div class="modal-body">
      <div class="modal-section">
        <div class="modal-section-title">📋 திட்ட விளக்கம்</div>
        <p class="modal-text">${s.description}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">💰 உதவித்தொகை விவரங்கள்</div>
        <div class="modal-amount">${s.benefitAmount}</div>
        <ul class="modal-list" style="margin-top:14px">
          ${s.benefitDetail.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">✅ தகுதி நிபந்தனைகள்</div>
        <ul class="modal-list">
          ${s.eligibility.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">📄 தேவையான ஆவணங்கள்</div>
        <ul class="modal-list">
          ${s.documents.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">⏰ கடைசி தேதி & பயனாளி</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">
          <span class="modal-tag tag-deadline">📅 ${s.deadline}</span>
          <span class="modal-tag tag-beneficiary">👤 ${s.beneficiary}</span>
        </div>
      </div>
      ${s.special ? `
      <div class="modal-section">
        <div class="modal-section-title">ℹ️ சிறப்பு குறிப்பு</div>
        <p class="modal-text" style="background:var(--blue-50);padding:14px;border-radius:12px;border-left:4px solid var(--blue-400)">${s.special}</p>
      </div>` : ''}
    </div>
  `;

  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeBotPanel();
  }
});

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function renderFAQ() {
  const list = document.getElementById('faqList');
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-arrow">⌄</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById(`faq-${i}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ============================================================
   CHATBOT
   ============================================================ */
function getBotAnswer(q) {
  const lower = q.toLowerCase().trim();

  const matchers = [
    { keys: ['திட்டங்கள்', 'என்ன திட்டம்', 'எல்லா திட்டம்', 'schemes', 'list'], key: 'திட்டங்கள்' },
    { keys: ['கல்வி', 'படிப்பு', 'education', 'school', 'degree', 'diploma'], key: 'கல்வி' },
    { keys: ['புத்தகம்', 'book', 'புத்தக'], key: 'புத்தகம்' },
    { keys: ['திருமணம்', 'marriage', 'wedding', 'கல்யாணம்'], key: 'திருமணம்' },
    { keys: ['மரணம்', 'death', 'funeral', 'இறப்பு', 'இறுதி'], key: 'மரணம்' },
    { keys: ['கண்ணாடி', 'spectacle', 'glass', 'eye'], key: 'கண்ணாடி' },
    { keys: ['தகுதி', 'eligibility', 'யார்', 'who can'], key: 'தகுதி' },
    { keys: ['ஆவணம்', 'document', 'papers', 'proof', 'certificate'], key: 'ஆவணங்கள்' },
    { keys: ['தொகை', 'amount', 'money', 'benefit', 'கிடைக்கும்', 'எவ்வளவு'], key: 'தொகை' }
  ];

  for (const m of matchers) {
    if (m.keys.some(k => lower.includes(k))) return KB[m.key];
  }
  return KB.default;
}

function addBubble(role, text) {
  const msgs = document.getElementById('chatMessages');
  const isBot = role === 'bot';
  const avatar = isBot ? '🤖' : '👤';
  const div = document.createElement('div');
  div.className = `chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`;
  div.innerHTML = `
    <div class="bubble-avatar">${avatar}</div>
    <div class="bubble-content">${text.replace(/\n/g, '<br />')}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-bubble bot-bubble';
  div.id = 'typingBubble';
  div.innerHTML = `
    <div class="bubble-avatar">🤖</div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typingBubble');
  if (t) t.remove();
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const q = input.value.trim();
  if (!q) return;

  addBubble('user', q);
  input.value = '';
  showTyping();

  setTimeout(() => {
    hideTyping();
    addBubble('bot', getBotAnswer(q));
  }, 900 + Math.random() * 500);
}

function askBot(q) {
  document.getElementById('chatInput').value = q;
  sendMessage();
  document.getElementById('chatbot').scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   GEMINI AI BOT PANEL – Direct API (works from file:// and http://)
   ============================================================ */

const GEMINI_API_KEY = 'AIzaSyDbOhjQRGtebQNVdu262Efs7FwrYOXN1oM';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// Full PDF knowledge base for Gemini context
const PDF_CONTEXT = `
WELFARE SCHEMES DATA (from Welfare_Schemes_Compiled.pdf):

1. BOOK ALLOWANCE SCHEME (புத்தக உதவித்தொகை திட்டம்)
Description: Financial assistance for purchase of books for one child of eligible employee.
Benefit Amount: Higher Secondary(12th): Rs.1,000 | Diploma: Rs.1,500 | UG Degree: Rs.2,000 | PG Degree: Rs.3,000
Beneficiary: Child of eligible employee
Eligibility: Employee age up to 60 years | Previous year LWF contribution required | Maximum salary Rs.35,000 (Basic+DA) | Maximum one child per academic year
Last Date: 31st December every year
Required Documents: Original bonafide certificate | Original cash bill for books | Aadhaar card of employee | Aadhaar card of student | Ration card | LWF payment receipt | Previous month salary slip | Salary slip showing LWF deduction | Employee bank passbook front page (2 copies)

2. EDUCATIONAL ASSISTANCE SCHEME (கல்வி உதவித்தொகை திட்டம்)
Description: Financial assistance for children of eligible employees studying school, diploma, UG and PG courses.
Benefit Amount: PG Professional: Rs.12,000 | UG Professional: Rs.8,000 | Diploma: Rs.5,000 | ITI/Higher Secondary: Rs.4,000 | 9th & 10th: Rs.3,000 | 6th-8th: Rs.2,000 | Pre-KG to 5th: Rs.1,000
Beneficiary: Child of eligible employee
Eligibility: Employee age up to 60 | Previous year LWF contribution | Max salary Rs.35,000 | One child per year | Student must pass previous exam without arrears | Apply before 31st December
Documents: Original bonafide certificate | Marksheet copy | Aadhaar cards | Ration card | LWF receipt | Salary slips | Bank passbook (2 copies)

3. EDUCATIONAL INCENTIVE SCHEME (கல்வி ஊக்கத்தொகை திட்டம்)
Description: For children who secure top 10 ranks in 10th or 12th public exam in each district.
Benefit Amount: 10th Standard: Rs.2,000 | 12th Standard: Rs.3,000
Beneficiary: Child of eligible employee
Eligibility: Employee age up to 60 | LWF contribution required | Must secure top 10 rank in district | Last date: 31st December
Documents: Marksheet copy | Aadhaar cards | Ration card | LWF receipt | Salary slip with LWF deduction | Bank passbook (2 copies)

4. MARRIAGE ASSISTANCE SCHEME (திருமண உதவித்தொகை திட்டம்)
Description: Financial assistance for marriage to eligible employees and their wards.
Benefit Amount: Rs.20,000
Eligibility: Employee age up to 60 | LWF contribution required | Max salary Rs.35,000 | Apply within 3 months from marriage date | Marriage must be registered | Only one eligible employee can apply per family
Documents: Marriage registration certificate | Original marriage invitation | Aadhaar cards of employee, bride, bridegroom | Ration card | LWF receipt | Salary slips | Bank passbook

5. NATURAL DEATH AND FUNERAL SCHEME (மரண உதவித்தொகை திட்டம்)
Description: For legal heir of deceased eligible employee.
Benefit Amount: Total Rs.55,000 (Natural Death: Rs.50,000 + Funeral: Rs.5,000)
Beneficiary: Legal heir of deceased employee
Eligibility: Max age 60 | Salary below Rs.35,000 | LWF contribution required | Apply within 12 months from death
Documents: Death Certificate | Legal Heir Certificate | NOC if required | Aadhaar cards | Ration cards | LWF receipt | Last salary slip | Bank passbook

6. REIMBURSEMENT OF SPECTACLES (கண்ணாடி உதவித்தொகை திட்டம்)
Description: Reimbursement of cost of spectacles for eligible employee.
Benefit Amount: Up to Rs.1,000 (actual cost or Rs.1,000, whichever is lower)
Beneficiary: Eligible employee
Eligibility: Age up to 60 | LWF contribution required | Max salary Rs.35,000 | Only once during entire service
Documents: Doctor prescription | Original bill for spectacles | Aadhaar card | Ration card | LWF deduction salary slip | LWF receipt | Salary slip | Bank passbook
`;

// Panel chat history
let panelHistory = [];
let panelTyping = false;

function openBotPanel() {
  const panel = document.getElementById('botPanel');
  const overlay = document.getElementById('botPanelOverlay');
  panel.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
  // Focus input
  setTimeout(() => {
    const inp = document.getElementById('panelChatInput');
    if (inp) inp.focus();
  }, 400);
}

function closeBotPanel() {
  document.getElementById('botPanel').classList.remove('open');
  document.getElementById('botPanelOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

function openBotNewTab() {
  window.open('http://localhost:8501', '_blank');
}

function scrollToChat() {
  document.getElementById('chatbot').scrollIntoView({ behavior: 'smooth' });
}

// Add a message bubble to the panel
function addPanelBubble(role, text, id) {
  const msgs = document.getElementById('panelMessages');
  const isBot = role === 'bot';
  const div = document.createElement('div');
  div.className = `panel-bubble ${isBot ? 'panel-bot' : 'panel-user'}`;
  if (id) div.id = id;
  div.innerHTML = `
    <div class="panel-avatar">${isBot ? '🤖' : '👤'}</div>
    <div class="panel-text">${text.replace(/\n/g, '<br>')}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

// Show/hide typing
function showPanelTyping() {
  const msgs = document.getElementById('panelMessages');
  const div = document.createElement('div');
  div.className = 'panel-bubble panel-bot';
  div.id = 'panelTyping';
  div.innerHTML = `
    <div class="panel-avatar">🤖</div>
    <div class="panel-typing">
      <span></span><span></span><span></span>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function hidePanelTyping() {
  const t = document.getElementById('panelTyping');
  if (t) t.remove();
}

// Call Gemini API
async function callGemini(userMessage) {
  panelHistory.push({ role: 'user', parts: [{ text: userMessage }] });

  const systemPrompt = `You are "நலவறியும் AI உதவியாளர்" (Nallavarriyum AI Assistant), a helpful Tamil welfare scheme assistant.

RULES:
1. Answer ONLY based on the PDF data provided below.
2. Always answer in BOTH Tamil and English.
3. Give clear, structured answers.
4. If asked about eligibility, list all conditions clearly.
5. If asked about documents, list each document clearly.
6. If asked about amount/benefit, state exact amounts.
7. If information is not in the PDF, say: "இந்த தகவல் கிடைக்கவில்லை / Information not available."
8. Be warm, helpful, and professional in tone.

FORMAT your response like:
🇮🇳 **தமிழில்:**
[Tamil answer]

🇬🇧 **English:**
[English answer]

${PDF_CONTEXT}

User question: ${userMessage}`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: systemPrompt }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 1024 }
  };

  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || 'API Error');
  }

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'பதில் கிடைக்கவில்லை.';
  panelHistory.push({ role: 'model', parts: [{ text: reply }] });
  return reply;
}

// Send panel message
async function sendPanelMessage() {
  if (panelTyping) return;
  const input = document.getElementById('panelChatInput');
  const q = input.value.trim();
  if (!q) return;

  input.value = '';
  addPanelBubble('user', q);
  showPanelTyping();
  panelTyping = true;

  try {
    const answer = await callGemini(q);
    hidePanelTyping();
    // Format markdown-like bold
    const formatted = answer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
    addPanelBubble('bot', formatted);
  } catch (e) {
    hidePanelTyping();
    addPanelBubble('bot', `⚠️ பிழை ஏற்பட்டது: ${e.message}<br><em>Error: ${e.message}</em>`);
  }
  panelTyping = false;
}

// Quick question buttons in panel
function panelQuickAsk(q) {
  document.getElementById('panelChatInput').value = q;
  sendPanelMessage();
}

/* ============================================================
   NAVBAR / SCROLL
   ============================================================ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const backTop = document.getElementById('backToTop');
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
    backTop.classList.add('visible');
  } else {
    nav.classList.remove('scrolled');
    backTop.classList.remove('visible');
  }
});

/* Hamburger */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* Close mobile nav on link click */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ============================================================
   INIT
   ============================================================ */
renderSchemes(SCHEMES);
renderFAQ();
