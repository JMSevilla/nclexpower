export type QuestionaireProps = {
  qId: number;
  QType: string;
  question: string;
  questionUI: string;
  tabs: Array<{
    tabsId: number;
    tabsTitle: string;
    contentTitle: string;
    content: string;
  }>;
};

export type AnswerProps = {
  answerId: number;
  qId: number;
  answerType: string;
  answerInstruction: string;
  answerUI: string;
  columns: Array<string>;
  rows: any;
  note: string;
  score: number;

};

export type SsrData = {
  questionaire: QuestionaireProps[];
  answer: AnswerProps[];
};
