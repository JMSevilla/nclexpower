import { Paper } from '@mui/material'
import React, { ReactNode } from 'react'

interface QuestionData {
    contentTitle: string
    id: string
    question: string
    tabs: []

}

interface Props {
    question?: QuestionData[]
}

export const QuestionOneContainer: React.FC<Props> = ({ question }) => {
    return (
        <div className='h-full w-1/2 p-5'>
            <div className='w-full text-sm mb-4 pr-5'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut commodi aliquid reprehenderit fugit error quidem quo alias vero quasi! Libero assumenda maiores deserunt facere quos vero quasi illo expedita odit?</p>
            </div>
            <div className='w-full h-full'>
                {question && question.map((question) => (
                    <div key={question?.id} className='flex gap-1'>
                        {question.tabs && question.tabs.map((tab: any) => (
                            <div key={tab.tabId} className='bg-white w-fit px-5 py-1 rounded-t-md text-sm font-semibold flex items-center'><p>{tab.tabsTitle}</p></div>
                        ))}
                    </div>
                ))}

                <Paper variant='elevation' className='rounded-b-md rounded-r-md h-5/6 p-5 overflow-y-auto flex flex-col gap-5 '>
                    {question && question.map((question) => (
                        <div key={question?.id} className='flex flex-col gap-y-4'>
                            {question.tabs && question.tabs.map((tab: any) => (
                                <p key={question?.id} className='font-semibold'> {tab?.contentTitle}</p>
                            ))}
                            <div className='flex w-full gap-2' key={question?.id}>
                                <p className='font-semibold min-w-[50px]'> {question?.id} : </p>
                                <div className='leading-6 text-sm'>
                                    {/* {question?.question} */}
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam alias hic eos officiis.
                                    Eum reprehenderit maiores quam aliquid rem molestias numquam eos, dolorum, neque ratione odio magni, aut doloribus sint!
                                </div>
                            </div>
                        </div>

                    ))
                    }

                </Paper>
            </div>
        </div>
    )
}

export default QuestionOneContainer
