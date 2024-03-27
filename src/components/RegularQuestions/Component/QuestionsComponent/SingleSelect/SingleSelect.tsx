import { Paper } from '@mui/material'
import React from 'react'

interface QuestionData {
    contentTitle: string
    qInstruction: string
    id: string
    qId: string
    question: string
    tabs: []
}



interface Props {
    question?: QuestionData[]

}

export const SingleSelect: React.FC<Props> = ({ question }) => {
    return (
        <div className='h-full w-full p-5'>
            <div className='w-full text-sm mb-4 pr-5'>
                <p>{question && question.map((quest) => (
                    quest.question
                ))}</p>
            </div>
            <div className='w-full h-full'>
                {question && question.map((question) => (
                    <div key={question?.id} className='flex gap-1'>
                        {question.tabs && question.tabs.map((tab: any) => (
                            <div key={tab.tabId} className='bg-white w-fit px-5 py-1 rounded-t-md text-sm font-semibold flex items-center'>
                                <p>{tab.tabsTitle}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <Paper variant='elevation' className='rounded-b-md rounded-r-md h-5/6 p-5 overflow-y-auto flex flex-col gap-5 '>
                    {question && question.map((question) => (
                        <div key={question?.id} className='flex flex-col gap-y-4'>
                            {question.tabs && question.tabs.map((tab: any) => (
                                <>
                                    <p key={question?.id} className='font-semibold'>
                                        {tab?.contentTitle}
                                    </p>
                                    <div className='flex w-full gap-2' key={question?.id}>
                                        <p className='font-semibold min-w-[50px]'> {question?.qId} : </p>
                                        <div className='leading-6 text-sm'>
                                            {tab?.content}
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>

                    ))
                    }
                </Paper>
            </div>
        </div>

    )
}

export default SingleSelect
