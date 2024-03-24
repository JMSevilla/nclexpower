import { QuestionaireProps } from "@/core/types";
import React from "react";

/**
 * @params QType = "SATA", "MCQ"
 */

interface Props {
  questionatire: QuestionaireProps[];
}
export const ParseRQ: React.FC<Props> = ({ questionatire }) => {
  const findQ =
    questionatire.length > 0 &&
    questionatire.find((item) => item.QType === "MCQ");
  console.log(findQ);
  return <></>;
};

/**
 *
 */
