import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProdDetails = () => {
    // let location = useLocation().state
    let { state } = useLocation()
    console.log("Prod Data", state);
    return (
        <>
            <Box>
                {/* <Avatar src={state.thumbnail}/> */}
                <Card>
                    <CardMedia component="img"
                    src={state.thumbnail}
                    height={160}/>
                    <CardContent>
                        <CardContent>
                            <Typography variant='h6'>{state.title}</Typography>
                            <Typography variant='h6'>{state.price}</Typography>
                            <Typography variant='h6'>{state.description}</Typography>
                            <Typography variant='h6'>{state.brand}</Typography>
                        </CardContent>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
