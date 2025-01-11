import { QuizAnswer } from '../types';
import { UserProfileData } from '../components/quiz/UserProfile';

interface QuizData {
  timestamp: string;
  email: string;
  userProfile: UserProfileData;
  answers: QuizAnswer[];
  riskLevel: string;
  shareId: string;
}

const HEADERS = [
  'Timestamp',
  'Email',
  'Age',
  'Gender',
  'Relationship Status',
  'Location',
  'Relationship Duration',
  'Risk Level',
  'Share ID',
  'Total Score',
  'Question Responses'
].join(',') + '\n';

export const saveQuizData = (data: QuizData) => {
  try {
    // Calculate total score
    const totalScore = data.answers.reduce((sum, answer) => sum + answer.score, 0);
    
    // Format user profile data
    const profileData = [
      data.userProfile.age,
      `"${data.userProfile.gender}"`,
      `"${data.userProfile.relationshipStatus}"`,
      `"${data.userProfile.location}"`,
      `"${data.userProfile.relationshipDuration}"`
    ].join(',');

    // Format answers into a single string
    const answersStr = data.answers.map(a => `Q${a.questionId}:${a.score}`).join(';');

    // Create CSV row
    const row = [
      data.timestamp,
      `"${data.email}"`,
      profileData,
      `"${data.riskLevel}"`,
      `"${data.shareId}"`,
      totalScore,
      `"${answersStr}"`
    ].join(',') + '\n';

    // Get existing data or initialize with headers
    let existingData = localStorage.getItem('quiz_data') || HEADERS;
    
    // Append new row
    localStorage.setItem('quiz_data', existingData + row);

    // Also download the data as a CSV file
    const blob = new Blob([existingData + row], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `quiz_data_${new Date().toISOString()}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return true;
  } catch (error) {
    console.error('Error saving quiz data:', error);
    return false;
  }
};