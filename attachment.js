// ===========================
// attachment.js (15-question version)

const attachmentQuiz = [
  {
    question: "I find it easy to get close to others and I'm comfortable depending on them.",
    options: [
      { text: "Strongly Agree", scores: { secure: 2 } },
      { text: "Agree", scores: { secure: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { avoidant: 1 } },
      { text: "Strongly Disagree", scores: { avoidant: 2 } }
    ]
  },
  {
    question: "I worry a lot about my relationships and whether people truly love me.",
    options: [
      { text: "Strongly Agree", scores: { anxious: 2 } },
      { text: "Agree", scores: { anxious: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I am afraid of being hurt if I get too close to others.",
    options: [
      { text: "Strongly Agree", scores: { fearful: 2 } },
      { text: "Agree", scores: { fearful: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I often feel that my partner doesn't care as much as I do.",
    options: [
      { text: "Strongly Agree", scores: { anxious: 2 } },
      { text: "Agree", scores: { anxious: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I value independence more than emotional closeness.",
    options: [
      { text: "Strongly Agree", scores: { avoidant: 2 } },
      { text: "Agree", scores: { avoidant: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I'm comfortable depending on others and having them depend on me.",
    options: [
      { text: "Strongly Agree", scores: { secure: 2 } },
      { text: "Agree", scores: { secure: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { avoidant: 1 } },
      { text: "Strongly Disagree", scores: { avoidant: 2 } }
    ]
  },
  {
    question: "I fear being rejected, even by people close to me.",
    options: [
      { text: "Strongly Agree", scores: { anxious: 2, fearful: 1 } },
      { text: "Agree", scores: { anxious: 1, fearful: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "When my partner is distant, I feel abandoned.",
    options: [
      { text: "Strongly Agree", scores: { anxious: 2 } },
      { text: "Agree", scores: { anxious: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1, avoidant: 1 } },
      { text: "Strongly Disagree", scores: { avoidant: 2 } }
    ]
  },
  {
    question: "I struggle to express my emotions openly in relationships.",
    options: [
      { text: "Strongly Agree", scores: { avoidant: 2, fearful: 1 } },
      { text: "Agree", scores: { avoidant: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I often want to be closer to my partner than they seem to want.",
    options: [
      { text: "Strongly Agree", scores: { anxious: 2 } },
      { text: "Agree", scores: { anxious: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { avoidant: 1 } },
      { text: "Strongly Disagree", scores: { avoidant: 2 } }
    ]
  },
  {
    question: "I’m scared people will eventually leave me if I get too attached.",
    options: [
      { text: "Strongly Agree", scores: { fearful: 2 } },
      { text: "Agree", scores: { fearful: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I often push people away when they get too close.",
    options: [
      { text: "Strongly Agree", scores: { avoidant: 2, fearful: 1 } },
      { text: "Agree", scores: { avoidant: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I feel comfortable talking about my needs in relationships.",
    options: [
      { text: "Strongly Agree", scores: { secure: 2 } },
      { text: "Agree", scores: { secure: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { fearful: 1 } },
      { text: "Strongly Disagree", scores: { fearful: 2 } }
    ]
  },
  {
    question: "If someone gets too close, I tend to shut down emotionally.",
    options: [
      { text: "Strongly Agree", scores: { avoidant: 2, fearful: 1 } },
      { text: "Agree", scores: { avoidant: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { secure: 1 } },
      { text: "Strongly Disagree", scores: { secure: 2 } }
    ]
  },
  {
    question: "I generally feel safe and secure in romantic relationships.",
    options: [
      { text: "Strongly Agree", scores: { secure: 2 } },
      { text: "Agree", scores: { secure: 1 } },
      { text: "Neutral", scores: {} },
      { text: "Disagree", scores: { anxious: 1 } },
      { text: "Strongly Disagree", scores: { anxious: 2 } }
    ]
  }
];

let currentAttachmentIndex = 0;
let attachmentScores = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };

function loadAttachmentQuestion() {
  const q = attachmentQuiz[currentAttachmentIndex];
  document.getElementById("quiz-question").innerText = q.question;
  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.classList.add("answer-button");
    btn.addEventListener("click", () => selectAttachmentAnswer(option.scores));
    answerButtons.appendChild(btn);
  });
}

function selectAttachmentAnswer(scoreObj) {
  Object.entries(scoreObj).forEach(([style, score]) => {
    attachmentScores[style] += score;
  });
  currentAttachmentIndex++;
  if (currentAttachmentIndex < attachmentQuiz.length) {
    loadAttachmentQuestion();
  } else {
    showAttachmentResults();
  }
}

function showAttachmentResults() {
  const total = Object.values(attachmentScores).reduce((a, b) => a + b, 0);
  const results = Object.entries(attachmentScores).map(([style, score]) => {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return `${style.charAt(0).toUpperCase() + style.slice(1)}: ${pct}%`;
  }).join("<br>");
  document.getElementById("quiz-container").innerHTML = "<h2>Your Attachment Style</h2><p>" + results + "</p>";
}

function startAttachmentQuiz() {
  currentAttachmentIndex = 0;
  attachmentScores = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };
  loadAttachmentQuestion();
}
