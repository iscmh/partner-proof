export interface QuizAnswer {
  questionId: string;
  score: number;
  pattern?: string;
}

export interface RiskLevel {
  level: 'high' | 'moderate' | 'low';
  percentage: number;
}