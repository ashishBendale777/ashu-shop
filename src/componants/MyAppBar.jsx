import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyAppBar = () => {
    let navigate = useNavigate()

    return (
        <>
            <AppBar position='static'>
                <Toolbar disableGutters                >

                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Ashu's Shop
                    </Typography>

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        textDecoration: 'none'
                    }}>

                        <List sx={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <ListItem>
                                <ListItemButton
                                    onClick={() => navigate('/')}>
                                    <ListItemText>
                                        Products
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton
                                    onClick={() => navigate('/profile')}>
                                    <ListItemText>
                                        Profile
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton
                                    onClick={() => navigate('/cart')}>
                                    <ListItemText>
                                        Cart
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton
                                    onClick={() => navigate('/register')}>
                                    <ListItemText>
                                        Register
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MyAppBar