// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["feeling overwhelmed", "can't cope", "stressed out"],
  ["stressed at work", "work pressure", "work stress"],
  ["family stress", "relationship stress", "personal issues"],
  ["panic attack", "panic attack", "anxious"],
  ["depressed", "feeling down", "feeling hopeless"],
  ["lonely", "feeling isolated", "social isolation"],
  ["anxiety", "feeling anxious", "anxious thoughts"],
  ["stress", "feeling stressed", "stressful", "stressed out"],
  ["depression", "feeling depressed", "sad", "down"],
  ["anxiety", "feeling anxious", "nervous"]
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "It's okay to feel overwhelmed sometimes. Remember to take breaks and practice relaxation techniques.",
    "Feeling stressed can impact our well-being. Consider talking to someone about how you're feeling.",
    "When stress takes over, it's important to reach out for support. Don't hesitate to share your feelings."
  ],
  [
    "Work-related stress is common. Make sure to set boundaries and prioritize self-care.",
    "Managing work stress is crucial. Try to communicate your feelings with your supervisor or seek guidance.",
    "Work pressure can affect mental health. Focus on creating a healthy work-life balance."
  ],
  [
    "Dealing with family or relationship stress can be tough. Open communication is key to resolving conflicts.",
    "Relationship stress is challenging. Consider seeking couples counseling or talking to a trusted friend.",
    "Family issues can take a toll on mental well-being. Reach out to a counselor for guidance."
  ],
  [
    "Experiencing a panic attack can be overwhelming. Try deep breathing exercises to help manage the symptoms.",
    "Panic attacks can be distressing. Remember that they are temporary and focus on grounding techniques.",
    "When a panic attack strikes, find a quiet space and focus on your breathing to calm down."
  ],
  [
    "Depression can make daily life challenging. It's important to seek help and talk about your feelings.",
    "Feeling down for an extended period may be a sign of depression. Don't hesitate to consult a mental health professional.",
    "Depression is a serious condition. Reach out to a therapist or counselor to explore treatment options."
  ],
  [
    "Feeling lonely is difficult. Try to engage in activities you enjoy and connect with supportive people.",
    "Loneliness can impact mental well-being. Reach out to friends or consider joining social groups.",
    "Social isolation can worsen mental health. Engage in virtual social activities and maintain connections."
  ],
  [
    "Anxiety is a common experience. Practice mindfulness and consider seeking professional support.",
    "Anxiety can be overwhelming. Remember to challenge anxious thoughts and focus on positive coping strategies.",
    "Experiencing anxiety is tough. Reach out to a therapist who can help you develop effective anxiety management techniques."
  ]
,[
    // Responses related to stress
    "I'm sorry to hear that you're feeling stressed. It's important to take care of your mental well-being.",
    "Feeling stressed is a common experience. Remember to practice self-care and reach out for support.",
    "Stress can be tough to handle. Try relaxation techniques and talking to someone you trust.",
  ],
  [
    // Responses related to depression
    "I'm here to listen if you're feeling depressed. Remember that seeking help is a sign of strength.",
    "Depression can be overwhelming. Reach out to a friend or professional for support.",
    "Feeling down is tough, but there are people who care about you. Consider talking to someone you trust.",
  ],
  [
    // Responses related to anxiety
    "If you're feeling anxious, you're not alone. Take deep breaths and consider trying relaxation exercises.",
    "Anxiety can be challenging, but there are strategies to manage it. Talking to a professional can be helpful.",
    "Feeling nervous is a common experience. Focus on your breathing and practice self-compassion.",
  ]
];

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
];

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"];