export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  isRight: boolean;
}
