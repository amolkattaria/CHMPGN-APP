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
  const startScreen = document.getElementById("start-screen");
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const restartBtn = document.getElementById("restart-button");

  if (startScreen && questionContainer && resultContainer && restartBtn) {
    startScreen.style.display = "block";
    questionContainer.style.display = "none";
    resultContainer.innerHTML = "";
    restartBtn.style.display = "none";

    currentIndex = 0;
    currentQuiz = [];
    scores = {};
    quizType = "";
  } else {
    console.error("restartQuiz error: some required DOM elements not found.");
  }
}

// Wrapper functions to support older button onclicks
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
