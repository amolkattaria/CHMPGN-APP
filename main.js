let currentIndex = 0;
let currentQuiz = [];
let scores = {};

// Make startQuiz globally accessible for the HTML onclick
window.startQuiz = function(type) {
  currentIndex = 0;
  scores = {
    "Words of Affirmation": 0,
    "Acts of Service": 0,
    "Quality Time": 0,
    "Physical Touch": 0,
    "Receiving Gifts": 0
  };

  currentQuiz = type === 'receiving' ? receivingQuiz : givingQuiz;

  // Show quiz UI
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  document.getElementById("result-container").innerHTML = "";

  loadQuestion();
};

function loadQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  if (currentIndex >= currentQuiz.length) {
    return showResults();
  }

  const q = currentQuiz[currentIndex];

  const questionEl = document.createElement("p");
  questionEl.textContent = q.question;
  container.appendChild(questionEl);

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => {
      scores[opt.language]++;
      currentIndex++;
      loadQuestion();
    };
    container.appendChild(btn);
  });
}

function showResults() {
  const container = document.getElementById("question-container");
  container.style.display = "none";

  const resultContainer = document.getElementById("result-container");
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages = {};

  for (let lang in scores) {
    percentages[lang] = Math.round((scores[lang] / total) * 100);
  }

  resultContainer.innerHTML = "<h2>Your Love Language Breakdown:</h2>";
  for (let lang in percentages) {
    resultContainer.innerHTML += `<p>${lang}: ${percentages[lang]}%</p>`;
  }
  // 👇 Show restart button
    document.getElementById("restart-button").style.display = "inline-block";
  }

window.restartQuiz = function () {
  currentIndex = 0;
  currentQuiz = [];

  // Reset scores
  scores = {
    "Words of Affirmation": 0,
    "Acts of Service": 0,
    "Quality Time": 0,
    "Physical Touch": 0,
    "Receiving Gifts": 0
  };

  // Reset UI
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("restart-button").style.display = "none";
};
