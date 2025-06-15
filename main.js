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
      const trait = opt.language || opt.trait;
      scores[trait]++;
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
    percentages[key] = Math.round((scores[key] / total) * 100);
  }

  const label = quizType === "receiving"
    ? "Receiving Quiz"
    : quizType === "giving"
    ? "Giving Quiz"
    : "OCEAN Personality Quiz";

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
