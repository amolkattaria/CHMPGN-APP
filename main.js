let currentQuiz = [];
let currentIndex = 0;
let scores = {};
let quizType = "";

const languageTraits = [
  "Words of Affirmation",
  "Acts of Service",
  "Quality Time",
  "Physical Touch",
  "Receiving Gifts"
];

const oceanTraits = [
  "Openness",
  "Conscientiousness",
  "Extraversion",
  "Agreeableness",
  "Neuroticism"
];

// Your existing receivingQuiz, givingQuiz, oceanQuiz must be defined elsewhere.

// Define your attachmentQuiz variable (short example, replace with full 15 Qs)
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
  // ... add remaining 14 questions ...
];

function startQuiz(type) {
  quizType = type;
  if (type === "receiving") {
    currentQuiz = receivingQuiz;
    scores = Object.fromEntries(languageTraits.map(t => [t, 0]));
  } else if (type === "giving") {
    currentQuiz = givingQuiz;
    scores = Object.fromEntries(languageTraits.map(t => [t, 0]));
  } else if (type === "ocean") {
    currentQuiz = oceanQuiz;
    scores = Object.fromEntries(oceanTraits.map(t => [t, 0]));
  } else if (type === "attachment") {
    currentQuiz = attachmentQuiz;
    scores = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };
  } else {
    alert("Unknown quiz type: " + type);
    return;
  }

  currentIndex = 0;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("restart-button").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  if (currentIndex >= currentQuiz.length) {
    showResults();
    return;
  }

  const q = currentQuiz[currentIndex];
  const qEl = document.createElement("h2");
  qEl.textContent = `Q${currentIndex + 1}: ${q.question}`;
  container.appendChild(qEl);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.className = "quiz-button";
    btn.onclick = () => {
      if (quizType === "attachment") {
        // Weighted scoring for attachment style
        Object.entries(opt.scores).forEach(([style, score]) => {
          scores[style] += score;
        });
      } else {
        const trait = opt.language || opt.trait;
        scores[trait]++;
      }
      currentIndex++;
      loadQuestion();
    };
    container.appendChild(btn);
  });
}

function showResults() {
  document.getElementById("question-container").style.display = "none";
  const resultContainer = document.getElementById("result-container");

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages = {};
  for (let key in scores) {
    percentages[key] = total > 0 ? Math.round((scores[key] / total) * 100) : 0;
  }

  let label = "";
  switch (quizType) {
    case "receiving":
      label = "Receiving Quiz";
      break;
    case "giving":
      label = "Giving Quiz";
      break;
    case "ocean":
      label = "OCEAN Personality Quiz";
      break;
    case "attachment":
      label = "Attachment Style Quiz";
      break;
    default:
      label = "Quiz";
  }

  let output = `<h2>Your ${label} Results:</h2><ul>`;
  for (let trait in percentages) {
    output += `<li><strong>${trait}</strong>: ${percentages[trait]}%</li>`;
  }
  output += "</ul>";

  resultContainer.innerHTML = output;
  document.getElementById("restart-button").style.display = "inline-block";
}

function restartQuiz() {
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("restart-button").style.display = "none";
  currentIndex = 0;
  currentQuiz = [];
  scores = {};
  quizType = "";
}

function startGivingQuiz() {
  startQuiz("giving");
}

function startReceivingQuiz() {
  startQuiz("receiving");
}

function startOceanQuiz() {
  startQuiz("ocean");
}

function startAttachmentQuiz() {
  startQuiz("attachment");
}
