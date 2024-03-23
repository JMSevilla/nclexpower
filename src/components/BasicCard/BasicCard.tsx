import { Card, CardActions, CardContent, Paper } from '@mui/material'
import React, { PropsWithChildren, ReactNode } from 'react'

interface Props {
    hasAction?: boolean;
    children: ReactNode;
    sx?: any;
    element: ReactNode;
}

const BasicCard: React.FC<React.PropsWithChildren<Props>> = ({ hasAction, children, element, sx }) => {
    return (
        <Card sx={sx}>
            <CardContent>
                {children}
            </CardContent>
            {hasAction &&
                <CardActions>
                    {element}
                </CardActions>
            }
        </Card>
    )
}

export default BasicCard
