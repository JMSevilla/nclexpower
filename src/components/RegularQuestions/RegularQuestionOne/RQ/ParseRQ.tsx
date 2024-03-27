import { SataQuestion, SingleSelect } from '@/components/RegularQuestions';
import { QuestionaireProps } from "@/core/types";
import React, { useEffect, useState } from "react";

/**
 * @params QType = "SATA", "MCQ"
 */


interface Props {
  questionatire: QuestionaireProps[];
}
export const ParseRQ: React.FC<Props> = ({ questionatire }) => {
  const [questionCon, setQuestionCon] = useState<string>()
  useEffect(() => {
    questionatire &&
      questionatire.map((item) => setQuestionCon(item?.QType))
  }, [questionatire])
  return (
    <>
      {questionCon === "SATA" ?
        <SataQuestion question={questionatire as []} /> :
        questionCon === "MCQ" ?
          <SingleSelect question={questionatire as []} />
          : null
      }
    </>
  )
};
