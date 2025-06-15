// ===========================
// quiz_giving.js (5-option version, 15 questions)
// ===========================

const givingQuiz = [
  {
    question: "When someone you care about is sad, what do you do first?",
    options: [
      { text: "Give them a warm hug", language: "Physical Touch" },
      { text: "Tell them how amazing they are", language: "Words of Affirmation" },
      { text: "Spend quality time with them one-on-one", language: "Quality Time" },
      { text: "Bring them a small gift or treat", language: "Receiving Gifts" },
      { text: "Do a task for them so they can rest", language: "Acts of Service" }
    ]
  },
  {
    question: "How do you usually celebrate someone’s achievement?",
    options: [
      { text: "Write them a heartfelt note", language: "Words of Affirmation" },
      { text: "Give them a high five or a hug", language: "Physical Touch" },
      { text: "Plan a celebration outing together", language: "Quality Time" },
      { text: "Get them a gift that shows you know them well", language: "Receiving Gifts" },
      { text: "Offer to help with something they’re stressed about", language: "Acts of Service" }
    ]
  },
  {
    question: "Which gesture feels most natural for you to express love?",
    options: [
      { text: "Making time to hang out and talk", language: "Quality Time" },
      { text: "Giving them something small that made you think of them", language: "Receiving Gifts" },
      { text: "Helping them with chores or errands", language: "Acts of Service" },
      { text: "Telling them how proud you are", language: "Words of Affirmation" },
      { text: "Holding hands or hugging them", language: "Physical Touch" }
    ]
  },
  {
    question: "You just got back from a trip — how do you show you missed someone?",
    options: [
      { text: "Share a heartfelt note about your time away", language: "Words of Affirmation" },
      { text: "Bring them a souvenir or gift", language: "Receiving Gifts" },
      { text: "Plan a catch-up day just for them", language: "Quality Time" },
      { text: "Give them a long hug the second you see them", language: "Physical Touch" },
      { text: "Offer to do something helpful right away", language: "Acts of Service" }
    ]
  },
  {
    question: "What do you do when someone you love is overwhelmed?",
    options: [
      { text: "Tell them it’s okay and that you believe in them", language: "Words of Affirmation" },
      { text: "Sit with them quietly, just being there", language: "Quality Time" },
      { text: "Rub their back or hold their hand", language: "Physical Touch" },
      { text: "Make them food or clean something for them", language: "Acts of Service" },
      { text: "Leave a small surprise at their door", language: "Receiving Gifts" }
    ]
  },
  {
    question: "You want someone to feel special on their birthday. What do you do?",
    options: [
      { text: "Tell them all the reasons you love them", language: "Words of Affirmation" },
      { text: "Give them a meaningful gift", language: "Receiving Gifts" },
      { text: "Spend the whole day together doing their favorite things", language: "Quality Time" },
      { text: "Hug them every time you get a chance", language: "Physical Touch" },
      { text: "Do something practical to make their day easier", language: "Acts of Service" }
    ]
  },
  {
    question: "A friend is feeling unappreciated — what’s your instinctual response?",
    options: [
      { text: "Reassure them with words", language: "Words of Affirmation" },
      { text: "Spend intentional time listening", language: "Quality Time" },
      { text: "Do something helpful for them", language: "Acts of Service" },
      { text: "Buy or make them a thoughtful gift", language: "Receiving Gifts" },
      { text: "Give them a comforting hug", language: "Physical Touch" }
    ]
  },
  {
    question: "When someone is sick, what do you do?",
    options: [
      { text: "Bring them soup or medicine", language: "Acts of Service" },
      { text: "Sit by their side to keep them company", language: "Quality Time" },
      { text: "Tell them you care about them and hope they feel better", language: "Words of Affirmation" },
      { text: "Bring a comfort gift like tea or snacks", language: "Receiving Gifts" },
      { text: "Hold their hand or rub their shoulder", language: "Physical Touch" }
    ]
  },
  {
    question: "Which of these do you instinctively do when you're proud of someone?",
    options: [
      { text: "Give them a meaningful compliment", language: "Words of Affirmation" },
      { text: "Give them a congratulatory hug", language: "Physical Touch" },
      { text: "Celebrate with them in-person", language: "Quality Time" },
      { text: "Buy or make them something congratulatory", language: "Receiving Gifts" },
      { text: "Take care of something for them", language: "Acts of Service" }
    ]
  },
  {
    question: "How do you express love during ordinary, daily moments?",
    options: [
      { text: "Say encouraging words", language: "Words of Affirmation" },
      { text: "Do helpful favors without being asked", language: "Acts of Service" },
      { text: "Plan regular check-ins or calls", language: "Quality Time" },
      { text: "Share spontaneous physical affection", language: "Physical Touch" },
      { text: "Bring little surprise gifts", language: "Receiving Gifts" }
    ]
  },
  {
    question: "You’re thinking about someone you love — how do you let them know?",
    options: [
      { text: "Send a thoughtful text", language: "Words of Affirmation" },
      { text: "Send a cute or funny gift", language: "Receiving Gifts" },
      { text: "Call them to chat", language: "Quality Time" },
      { text: "Give them a hug next time you see them", language: "Physical Touch" },
      { text: "Offer to help them with something", language: "Acts of Service" }
    ]
  },
  {
    question: "Which expression feels most genuine when you're in love?",
    options: [
      { text: "Telling them how you feel directly", language: "Words of Affirmation" },
      { text: "Being physically close often", language: "Physical Touch" },
      { text: "Spending uninterrupted time together", language: "Quality Time" },
      { text: "Finding ways to help them out", language: "Acts of Service" },
      { text: "Giving spontaneous little gifts", language: "Receiving Gifts" }
    ]
  },
  {
    question: "When you plan a surprise, it’s usually...",
    options: [
      { text: "A heartfelt letter or message", language: "Words of Affirmation" },
      { text: "A fun activity together", language: "Quality Time" },
      { text: "Something you made or bought for them", language: "Receiving Gifts" },
      { text: "A helpful gesture they didn’t expect", language: "Acts of Service" },
      { text: "A surprise hug or cuddle", language: "Physical Touch" }
    ]
  },
  {
    question: "If you had to pick just one way to show love every day, it would be...",
    options: [
      { text: "Verbal encouragement", language: "Words of Affirmation" },
      { text: "Hugs or touch", language: "Physical Touch" },
      { text: "Thoughtful gifts", language: "Receiving Gifts" },
      { text: "Doing tasks for them", language: "Acts of Service" },
      { text: "Spending focused time together", language: "Quality Time" }
    ]
  },
  {
  question: "Which action do you most often take without even thinking?",
  options: [
    { text: "Say something encouraging or sweet", language: "Words of Affirmation" },
    { text: "Give a reassuring hug or touch", language: "Physical Touch" },
    { text: "Buy or hand them something they might need", language: "Receiving Gifts" },
    { text: "Take over a task to lighten their load", language: "Acts of Service" },
    { text: "Ask to spend time together or initiate plans", language: "Quality Time" }   
    ]
  }
];

