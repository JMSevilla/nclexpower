import { Card, CardActions, CardContent, Paper } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
    hasAction: boolean;
    children: ReactNode;
    sx: any;
    element: ReactNode;
}

const BasicCard = ({ hasAction = false, children, sx = {}, element }: Props) => {
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
