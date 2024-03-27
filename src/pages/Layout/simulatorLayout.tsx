import { Footer, Header } from '@/components'
import { Box, Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export const SimulatorLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className='min-h-[100dvh] flex flex-col justify-between'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default SimulatorLayout
