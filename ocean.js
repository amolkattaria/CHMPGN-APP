const oceanQuiz = [
  {
    question: "How do you approach a group of new people at an event?",
    options: [
      { text: "Start interesting conversations or tell a story.", trait: "Openness" },
      { text: "Observe quietly and think through what I’ll say.", trait: "Neuroticism" },
      { text: "Introduce myself confidently and engage right away.", trait: "Extraversion" },
      { text: "Look for ways to help or include others.", trait: "Agreeableness" },
      { text: "Plan how I’ll interact and follow a personal strategy.", trait: "Conscientiousness" }
    ]
  },
  {
    question: "Which best describes your work style?",
    options: [
      { text: "Organized, structured, and goal-driven.", trait: "Conscientiousness" },
      { text: "I jump between creative ideas and explore freely.", trait: "Openness" },
      { text: "I try to avoid stress and stay emotionally balanced.", trait: "Neuroticism" },
      { text: "I keep things light and energize people around me.", trait: "Extraversion" },
      { text: "I like collaborating and supporting team members.", trait: "Agreeableness" }
    ]
  },
  {
    question: "How do you handle stress?",
    options: [
      { text: "I feel it deeply but try to hide it.", trait: "Neuroticism" },
      { text: "I focus on routine and planning to regain control.", trait: "Conscientiousness" },
      { text: "I talk it out and stay socially engaged.", trait: "Extraversion" },
      { text: "I use creative outlets to process it.", trait: "Openness" },
      { text: "I try to support others even if I’m stressed.", trait: "Agreeableness" }
    ]
  },
  {
    question: "Which best describes your ideal weekend?",
    options: [
      { text: "Spontaneous adventure or travel.", trait: "Openness" },
      { text: "Organizing and catching up on tasks.", trait: "Conscientiousness" },
      { text: "Relaxing and recovering from stress.", trait: "Neuroticism" },
      { text: "Hanging out with a group or party.", trait: "Extraversion" },
      { text: "Volunteering or helping a friend.", trait: "Agreeableness" }
    ]
  },
  {
    question: "When making a decision, what matters most?",
    options: [
      { text: "Doing what’s right for the group.", trait: "Agreeableness" },
      { text: "Staying calm and protecting my peace.", trait: "Neuroticism" },
      { text: "Using a logical and structured approach.", trait: "Conscientiousness" },
      { text: "Trying something that pushes boundaries.", trait: "Openness" },
      { text: "Getting input from others and taking action.", trait: "Extraversion" }
    ]
  },
  {
    question: "How do you spend your free time?",
    options: [
      { text: "Trying new things or learning something novel.", trait: "Openness" },
      { text: "Catching up on tasks or cleaning.", trait: "Conscientiousness" },
      { text: "Reflecting or decompressing emotionally.", trait: "Neuroticism" },
      { text: "Meeting up with people or going out.", trait: "Extraversion" },
      { text: "Checking in on friends and family.", trait: "Agreeableness" }
    ]
  },
  {
    question: "Which compliment would feel best to you?",
    options: [
      { text: "You're so dependable.", trait: "Conscientiousness" },
      { text: "You're really thoughtful and caring.", trait: "Agreeableness" },
      { text: "You're fun and great to be around.", trait: "Extraversion" },
      { text: "You’re really creative and insightful.", trait: "Openness" },
      { text: "You handle tough stuff better than most.", trait: "Neuroticism" }
    ]
  },
  {
    question: "How do you usually approach a new project?",
    options: [
      { text: "I make a checklist and structure the plan.", trait: "Conscientiousness" },
      { text: "I dive into brainstorming and experimentation.", trait: "Openness" },
      { text: "I feel anxious but push through.", trait: "Neuroticism" },
      { text: "I get others involved and excited.", trait: "Extraversion" },
      { text: "I ask how the team feels and support them.", trait: "Agreeableness" }
    ]
  },
  {
    question: "What do you value most in friendships?",
    options: [
      { text: "Emotional availability and empathy.", trait: "Agreeableness" },
      { text: "Depth and intellectual connection.", trait: "Openness" },
      { text: "Reliability and consistency.", trait: "Conscientiousness" },
      { text: "Energy and shared activity.", trait: "Extraversion" },
      { text: "Safety and emotional understanding.", trait: "Neuroticism" }
    ]
  },
  {
    question: "When dealing with unexpected changes, you...",
    options: [
      { text: "Feel overwhelmed and need time to process.", trait: "Neuroticism" },
      { text: "Focus on adapting and helping others adjust.", trait: "Agreeableness" },
      { text: "Get excited about the new challenge.", trait: "Openness" },
      { text: "Try to regain control through structure.", trait: "Conscientiousness" },
      { text: "Look for the social upside or shared experience.", trait: "Extraversion" }
    ]
  },
  {
    question: "What kind of praise motivates you the most?",
    options: [
      { text: "That you’re consistent and responsible.", trait: "Conscientiousness" },
      { text: "That you’re brave or resilient.", trait: "Neuroticism" },
      { text: "That you make people feel included.", trait: "Agreeableness" },
      { text: "That you’re bold and socially confident.", trait: "Extraversion" },
      { text: "That you think outside the box.", trait: "Openness" }
    ]
  },
  {
    question: "You prefer to spend your evenings...",
    options: [
      { text: "At home reading or creating.", trait: "Openness" },
      { text: "With a few close friends.", trait: "Agreeableness" },
      { text: "Tackling goals or prepping for the next day.", trait: "Conscientiousness" },
      { text: "Relaxing and recovering from the day.", trait: "Neuroticism" },
      { text: "At a party, gathering, or event.", trait: "Extraversion" }
    ]
  },
  {
    question: "How would your close friends describe you?",
    options: [
      { text: "Kind and loyal.", trait: "Agreeableness" },
      { text: "Organized and reliable.", trait: "Conscientiousness" },
      { text: "Creative and different.", trait: "Openness" },
      { text: "Fun and outgoing.", trait: "Extraversion" },
      { text: "Sensitive and thoughtful.", trait: "Neuroticism" }
    ]
  },
  {
    question: "When something unexpected ruins your plans, what's your instinct?",
    options: [
      { text: "Adapt and look for a new opportunity.", trait: "Openness" },
      { text: "Feel anxious or thrown off but keep going.", trait: "Neuroticism" },
      { text: "Take charge and suggest an alternative to others.", trait: "Extraversion" },
      { text: "Reorganize and make a revised plan.", trait: "Conscientiousness" },
      { text: "Ask others how they feel and adjust to them.", trait: "Agreeableness" }
    ]
  },
  {
    question: "What role do you often take in group settings?",
    options: [
      { text: "The planner and coordinator.", trait: "Conscientiousness" },
      { text: "The one checking in emotionally.", trait: "Agreeableness" },
      { text: "The one breaking the ice.", trait: "Extraversion" },
      { text: "The one introducing new ideas.", trait: "Openness" },
      { text: "The one managing behind the scenes quietly.", trait: "Neuroticism" }
    ]
  }
];
