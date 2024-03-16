import React from "react";
import { QuestionaireHeader } from "@/components/Questionaire/Header";

export default function Home() {
  return (
    <>
      <QuestionaireHeader
        rangeOfQuestionaires={[]}
        title=""
        duration={0}
        endTime={new Date()}
      />
    </>
  );
}
