let currentQuiz = [];
let currentIndex = 0;
let scores = {};
let quizType = "";  // Track which quiz is active

const allLanguages = [
  "Words of Affirmation",
  "Acts of Service",
  "Quality Time",
  "Physical Touch",
  "Receiving Gifts"
];

function startQuiz(type) {
  quizType = type;  // Save quiz type for results display
  currentQuiz = type === "receiving" ? receivingQuiz : givingQuiz;
  currentIndex = 0;
  scores = {};
  allLanguages.forEach(lang => scores[lang] = 0);

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
      scores[opt.language]++;
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
  for (let lang in scores) {
    percentages[lang] = Math.round((scores[lang] / total) * 100);
  }

  const quizLabel = quizType === "receiving" ? "Receiving Quiz" : "Giving Quiz";

  let output = `<h2>Your ${quizLabel} Results:</h2><ul>`;
  for (let lang in percentages) {
    output += `<li><strong>${lang}</strong>: ${percentages[lang]}%</li>`;
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
  allLanguages.forEach(lang => scores[lang] = 0);
  quizType = "";
}
