import { Radio } from '@/components/Radio/Radio'

import React from 'react'


interface AnswerData {
    answerInstruction: string
    choices: []

}

interface Props {
    answer?: AnswerData[]
}

export const SingleSelectAnswer: React.FC<Props> = ({ answer }) => {




    return (
        <div className='h-full w-full p-5'>
            <ol className='w-full text-sm mb-4 pr-5 list-disc'>
                <li>{answer && answer.map((ans) => (
                    ans.answerInstruction
                ))}</li>
            </ol>
            <div className='w-full h-full'>

                {answer && answer.map((choiceMap) =>
                    choiceMap?.choices && choiceMap?.choices.map((choiceItem, choiceIndex) => (
                        <div className='flex items-center' key={choiceIndex}>
                            <span className='scale-50'><Radio /></span>
                            <p className='text-sm'>{choiceItem}</p>
                        </div>
                    )))}

            </div>

        </div>
        // <div className='h-full w-full p-5'>
        //     <SingleSelectSTable data={answer} />
        // </div>
    )
}

export default SingleSelectAnswer
