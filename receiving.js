// ===============================
// quiz_receiving.js (5-option version, 15 questions)
// ===============================

const receivingQuiz = [
  {
    question: "What makes you feel most cared for after a long day?",
    options: [
      { text: "Someone telling you you’re doing great", language: "Words of Affirmation" },
      { text: "A spontaneous gift or treat", language: "Receiving Gifts" },
      { text: "Cuddling or being physically close", language: "Physical Touch" },
      { text: "Uninterrupted time with someone you love", language: "Quality Time" },
      { text: "Someone doing a task for you without being asked", language: "Acts of Service" }
    ]
  },
  {
    question: "Which action makes you feel most loved?",
    options: [
      { text: "Being told kind, affirming things", language: "Words of Affirmation" },
      { text: "Having someone handle responsibilities for you", language: "Acts of Service" },
      { text: "Spending meaningful time with someone", language: "Quality Time" },
      { text: "Being given a thoughtful gift", language: "Receiving Gifts" },
      { text: "Getting a warm hug or physical touch", language: "Physical Touch" }
    ]
  },
  {
    question: "When you're upset, what do you hope someone does?",
    options: [
      { text: "Listens without judgment, just being there", language: "Quality Time" },
      { text: "Offers to do something helpful for you", language: "Acts of Service" },
      { text: "Hugs or gently touches you", language: "Physical Touch" },
      { text: "Gives you a note or words of encouragement", language: "Words of Affirmation" },
      { text: "Leaves you something thoughtful to make you smile", language: "Receiving Gifts" }
    ]
  },
  {
    question: "What’s most meaningful on your birthday?",
    options: [
      { text: "Hearing why people care about you", language: "Words of Affirmation" },
      { text: "Spending quality time with people you love", language: "Quality Time" },
      { text: "Getting hugs and affection", language: "Physical Touch" },
      { text: "Receiving thoughtful presents", language: "Receiving Gifts" },
      { text: "People helping make the day stress-free", language: "Acts of Service" }
    ]
  },
  {
    question: "You’re having a rough day — what lifts your mood the most?",
    options: [
      { text: "A sincere compliment", language: "Words of Affirmation" },
      { text: "Someone surprising you with your favorite snack", language: "Receiving Gifts" },
      { text: "Being helped with something you didn’t want to do", language: "Acts of Service" },
      { text: "Getting hugged or touched", language: "Physical Touch" },
      { text: "Someone giving you their full attention", language: "Quality Time" }
    ]
  },
  {
    question: "Which of these makes you feel the *most* appreciated?",
    options: [
      { text: "A kind and personal message", language: "Words of Affirmation" },
      { text: "A long one-on-one conversation", language: "Quality Time" },
      { text: "Someone physically comforting you", language: "Physical Touch" },
      { text: "A surprise package or item you needed", language: "Receiving Gifts" },
      { text: "An act of support without asking", language: "Acts of Service" }
    ]
  },
  {
    question: "After an argument, what helps you feel reconnected?",
    options: [
      { text: "Hearing the person affirm their care for you", language: "Words of Affirmation" },
      { text: "A hug or physical closeness", language: "Physical Touch" },
      { text: "Spending quiet, intentional time together", language: "Quality Time" },
      { text: "The person doing something nice for you", language: "Acts of Service" },
      { text: "Receiving a peace offering gift", language: "Receiving Gifts" }
    ]
  },
  {
    question: "You feel closest to people who...",
    options: [
      { text: "Say loving or meaningful things", language: "Words of Affirmation" },
      { text: "Want to be physically close", language: "Physical Touch" },
      { text: "Spend quality time with you regularly", language: "Quality Time" },
      { text: "Show up and do things for you", language: "Acts of Service" },
      { text: "Surprise you with thoughtful gifts", language: "Receiving Gifts" }
    ]
  },
  {
    question: "When you think about love, what comes to mind first?",
    options: [
      { text: "Hearing the words ‘I love you’", language: "Words of Affirmation" },
      { text: "Getting uninterrupted time together", language: "Quality Time" },
      { text: "Receiving a meaningful gift", language: "Receiving Gifts" },
      { text: "Feeling held or physically supported", language: "Physical Touch" },
      { text: "Being helped in little ways daily", language: "Acts of Service" }
    ]
  },
  {
    question: "What kind of memory sticks with you most?",
    options: [
      { text: "Something sweet someone said", language: "Words of Affirmation" },
      { text: "A long conversation that meant a lot", language: "Quality Time" },
      { text: "When someone stepped in to help", language: "Acts of Service" },
      { text: "A special, unexpected gift", language: "Receiving Gifts" },
      { text: "A powerful moment of closeness", language: "Physical Touch" }
    ]
  },
  {
    question: "What would make you feel most valued right now?",
    options: [
      { text: "A message reminding me why I matter", language: "Words of Affirmation" },
      { text: "Someone spending time with me on purpose", language: "Quality Time" },
      { text: "Getting help with something stressful", language: "Acts of Service" },
      { text: "Physical affection", language: "Physical Touch" },
      { text: "A symbolic or useful gift", language: "Receiving Gifts" }
    ]
  },
  {
    question: "What do you most look forward to in a relationship?",
    options: [
      { text: "Feeling seen and told I'm loved", language: "Words of Affirmation" },
      { text: "Being able to spend deep time together", language: "Quality Time" },
      { text: "Physical intimacy and touch", language: "Physical Touch" },
      { text: "Support without having to ask", language: "Acts of Service" },
      { text: "Thoughtful surprises or gifts", language: "Receiving Gifts" }
    ]
  },
  {
    question: "Which of these would disappoint you the most to lose?",
    options: [
      { text: "Affectionate words and verbal connection", language: "Words of Affirmation" },
      { text: "Quality time and shared moments", language: "Quality Time" },
      { text: "Touch, like hugs and closeness", language: "Physical Touch" },
      { text: "Acts of kindness and help", language: "Acts of Service" },
      { text: "Gifts that show someone was thinking of you", language: "Receiving Gifts" }
    ]
  },
  {
    question: "Which act would make you feel the most understood?",
    options: [
      { text: "Hearing someone express what they admire in you", language: "Words of Affirmation" },
      { text: "Getting help with something without asking", language: "Acts of Service" },
      { text: "Having someone sit with you quietly", language: "Quality Time" },
      { text: "Receiving a gift that’s surprisingly relevant", language: "Receiving Gifts" },
      { text: "A reassuring touch, like a hand on your back", language: "Physical Touch" }
    ]
  },
  {
    question: "If someone wanted to show you they care today, what would be best?",
    options: [
      { text: "A few words of encouragement or praise", language: "Words of Affirmation" },
      { text: "Spending time together doing something fun", language: "Quality Time" },
      { text: "Helping you with something on your plate", language: "Acts of Service" },
      { text: "Hugging or touching you gently", language: "Physical Touch" },
      { text: "Giving you something small but thoughtful", language: "Receiving Gifts" }
    ]
  }
];
