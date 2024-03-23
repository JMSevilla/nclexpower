import { Footer, Header } from '@/components'
import { Box, Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export const simulatorLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Box style={{ height: '100dvh', width: '100dvw', backgroundColor: 'wheat' }}>
            <Header />
            {children}
            <Footer />

        </Box>
    )
}

export default simulatorLayout
