import { QuizAnswer } from '../types';
import { UserProfileData } from '../components/quiz/UserProfile';
import { quizQuestions } from '../constants/quizQuestions';

interface WebhookData {
  email: string;
  userProfile?: UserProfileData;
  answers: QuizAnswer[];
  shareId: string;
}

export const sendToWebhook = async (data: WebhookData): Promise<boolean> => {
  try {
    // Validate required data
    if (!data.email || !data.answers || !data.shareId) {
      console.error('Missing required data for webhook');
      return false;
    }

    // Calculate total risk score
    const totalScore = data.answers.reduce((sum, answer) => sum + answer.score, 0);
    const maxPossibleScore = data.answers.length * 10;
    const riskPercentage = Math.round((totalScore / maxPossibleScore) * 100);

    // Create a detailed message for Discord
    const message = {
      content: '🚨 New Assessment Submission',
      embeds: [
        {
          title: '👤 User Information',
          color: 0x8A2BE2, // Purple color
          fields: [
            {
              name: 'Email',
              value: data.email,
              inline: true
            },
            {
              name: 'Age',
              value: data.userProfile?.age?.toString() || 'Not provided',
              inline: true
            },
            {
              name: 'Gender',
              value: data.userProfile?.gender || 'Not provided',
              inline: true
            },
            {
              name: 'Relationship Status',
              value: data.userProfile?.relationshipStatus || 'Not provided',
              inline: true
            },
            {
              name: 'Location',
              value: data.userProfile?.location || 'Not provided',
              inline: true
            },
            {
              name: 'Relationship Duration',
              value: data.userProfile?.relationshipDuration || 'Not provided',
              inline: true
            }
          ],
          timestamp: new Date().toISOString()
        },
        {
          title: '📊 Assessment Results',
          description: `Risk Level: ${riskPercentage}%`,
          color: 0x8A2BE2,
          fields: data.answers.map(answer => {
            const question = quizQuestions.find(q => q.id === answer.questionId);
            const selectedOption = question?.options.find(opt => opt.score === answer.score);
            
            return {
              name: question?.question || 'Unknown Question',
              value: selectedOption?.text || 'No answer provided',
              inline: false
            };
          }),
          footer: {
            text: `Share ID: ${data.shareId}`
          }
        }
      ]
    };

    const response = await fetch('https://discord.com/api/webhooks/1326978733978030090/nw2sWL2ZJ0Cl9Hl0f5yQY2UKKPwbN5PN6PMwNwtJad3NjE2Qs-0yRkPsZ3FVZ1en1ypq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Discord API error (${response.status}): ${errorText}`);
    }

    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Webhook error:', {
        message: error.message,
        stack: error.stack
      });
    } else {
      console.error('Unknown webhook error:', error);
    }
    return false;
  }
};