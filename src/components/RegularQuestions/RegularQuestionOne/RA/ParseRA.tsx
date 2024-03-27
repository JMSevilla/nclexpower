import SataAnswer from '@/components/RegularQuestions/Component/AnswersComponent/SataAnswer/SataAnswer';
import SingleSelectAnswer from '@/components/RegularQuestions/Component/AnswersComponent/SingleSelectAnswer/SingleSelectAnswer';
import { AnswerProps } from "@/core/types";
import React, { useEffect, useState } from "react";

/**
 * @params QType = "SATA", "MCQ"
 */


interface Props {
    answer: AnswerProps[];

}
export const ParseRA: React.FC<Props> = ({ answer }) => {
    const [answerCon, setAnswerCon] = useState<string>()
    useEffect(() => {
        answer &&
            answer.map((item) => setAnswerCon(item?.answerType))
    }, [answer])

    return (
        <>
            {answerCon === "SATA" ?
                <SataAnswer answer={answer as []} /> :
                answerCon === "SingleSelect" ?
                    <SingleSelectAnswer answer={answer as []} />
                    : null
            }
        </>
    )
};
