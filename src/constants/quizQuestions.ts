export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    score: number;
    pattern?: 'high-risk' | 'moderate-risk' | 'low-risk' | 'no-risk';
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'phone-behavior',
    question: 'Has your partner become more protective of their phone recently?',
    options: [
      { text: 'Yes, they never let it out of their sight and hide the screen', score: 10, pattern: 'high-risk' },
      { text: 'They\'ve become somewhat more private with it', score: 7, pattern: 'moderate-risk' },
      { text: 'Slight changes but nothing concerning', score: 4, pattern: 'low-risk' },
      { text: 'No changes in phone behavior', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'working-hours',
    question: 'Have there been unexplained changes in their work schedule?',
    options: [
      { text: 'Frequent late nights and weekend work with vague explanations', score: 10, pattern: 'high-risk' },
      { text: 'Some irregular hours but they usually explain why', score: 7, pattern: 'moderate-risk' },
      { text: 'Minor schedule changes', score: 4, pattern: 'low-risk' },
      { text: 'Schedule remains consistent', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'emotional-distance',
    question: 'How has their emotional availability changed recently?',
    options: [
      { text: 'They\'ve become completely distant and unreachable', score: 10, pattern: 'high-risk' },
      { text: 'Less emotionally available than before', score: 7, pattern: 'moderate-risk' },
      { text: 'Slight changes but still connected', score: 4, pattern: 'low-risk' },
      { text: 'Still emotionally present and engaged', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'appearance-changes',
    question: 'Have you noticed sudden changes in their appearance or habits?',
    options: [
      { text: 'Major changes in style, fitness routine, and grooming', score: 10, pattern: 'high-risk' },
      { text: 'Some new attention to appearance', score: 7, pattern: 'moderate-risk' },
      { text: 'Minor changes in self-care', score: 4, pattern: 'low-risk' },
      { text: 'No significant changes', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'social-media',
    question: 'How has their social media behavior changed?',
    options: [
      { text: 'More secretive, new accounts, or reduced couple photos', score: 10, pattern: 'high-risk' },
      { text: 'Some changes in posting habits', score: 7, pattern: 'moderate-risk' },
      { text: 'Slightly less active than before', score: 4, pattern: 'low-risk' },
      { text: 'No noticeable changes', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'money-spending',
    question: 'Have you noticed unusual spending patterns?',
    options: [
      { text: 'Unexplained expenses and hidden transactions', score: 10, pattern: 'high-risk' },
      { text: 'Some unusual purchases', score: 7, pattern: 'moderate-risk' },
      { text: 'Minor changes in spending', score: 4, pattern: 'low-risk' },
      { text: 'Normal spending patterns', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'friend-behavior',
    question: 'How do your mutual friends act around you lately?',
    options: [
      { text: 'They seem uncomfortable and avoid certain topics', score: 10, pattern: 'high-risk' },
      { text: 'Some friends act differently', score: 7, pattern: 'moderate-risk' },
      { text: 'Slight changes in dynamics', score: 4, pattern: 'low-risk' },
      { text: 'No change in friend behavior', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'intimacy-changes',
    question: 'Have there been changes in physical intimacy?',
    options: [
      { text: 'Significant decrease or complete avoidance', score: 10, pattern: 'high-risk' },
      { text: 'Less frequent than before', score: 7, pattern: 'moderate-risk' },
      { text: 'Minor changes but still intimate', score: 4, pattern: 'low-risk' },
      { text: 'No changes in intimacy', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'communication-patterns',
    question: 'How has their communication pattern changed?',
    options: [
      { text: 'Very defensive and secretive about details', score: 10, pattern: 'high-risk' },
      { text: 'Sometimes vague about their activities', score: 7, pattern: 'moderate-risk' },
      { text: 'Slightly less communicative', score: 4, pattern: 'low-risk' },
      { text: 'Open and honest as usual', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'gift-attention',
    question: 'Have there been changes in their gift-giving or attention?',
    options: [
      { text: 'Sudden increase in gifts or guilt-driven attention', score: 10, pattern: 'high-risk' },
      { text: 'Some unusual patterns in attention', score: 7, pattern: 'moderate-risk' },
      { text: 'Slight changes but nothing major', score: 4, pattern: 'low-risk' },
      { text: 'Consistent as always', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'future-plans',
    question: 'How do they react when discussing future plans?',
    options: [
      { text: 'Avoids or changes the subject completely', score: 10, pattern: 'high-risk' },
      { text: 'Less enthusiastic than before', score: 7, pattern: 'moderate-risk' },
      { text: 'Still plans but with less detail', score: 4, pattern: 'low-risk' },
      { text: 'Actively plans for the future', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'unexplained-absences',
    question: 'How often do they have unexplained absences?',
    options: [
      { text: 'Frequent disappearances with weak excuses', score: 10, pattern: 'high-risk' },
      { text: 'Occasional unexplained delays', score: 7, pattern: 'moderate-risk' },
      { text: 'Rare occasions of being unreachable', score: 4, pattern: 'low-risk' },
      { text: 'Always communicates whereabouts', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'gut-feeling',
    question: 'What does your intuition tell you?',
    options: [
      { text: 'Strong feeling something is wrong', score: 10, pattern: 'high-risk' },
      { text: 'Some doubts and concerns', score: 7, pattern: 'moderate-risk' },
      { text: 'Occasional uncertainty', score: 4, pattern: 'low-risk' },
      { text: 'Feel secure in the relationship', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'mutual-friends',
    question: 'Have they made new friends they don\'t want you to meet?',
    options: [
      { text: 'Yes, and they\'re very secretive about them', score: 10, pattern: 'high-risk' },
      { text: 'Some new friends I haven\'t met', score: 7, pattern: 'moderate-risk' },
      { text: 'New friends but willing to introduce', score: 4, pattern: 'low-risk' },
      { text: 'No secretive new friendships', score: 1, pattern: 'no-risk' }
    ]
  },
  {
    id: 'tech-behavior',
    question: 'Have they changed passwords or increased device security?',
    options: [
      { text: 'Suddenly very protective of all devices', score: 10, pattern: 'high-risk' },
      { text: 'Some new privacy measures', score: 7, pattern: 'moderate-risk' },
      { text: 'Minor security updates', score: 4, pattern: 'low-risk' },
      { text: 'No changes in device security', score: 1, pattern: 'no-risk' }
    ]
  }
];