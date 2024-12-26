import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom'
import { addItem } from '../reduxwork/CartSlice';
import { useDispatch } from 'react-redux';


const Products = () => {

    let dispatcher = useDispatch()
    const [menuAnchor, setmenuAnchor] = useState(null)
    let isOpen = Boolean(menuAnchor)

    //dialog state variable
    const [isDialogOpen, setisDialogOpen] = useState(false)

    const [prodData, setprodData] = useState(null)
    const [filterProd, setFilterProd] = useState([])

    const [selectedBrand, setselectedBrand] = useState("All")

    let handleOpen = (event) => {
        setmenuAnchor(event.currentTarget)
    }
    let handleClose = () => {
        setmenuAnchor(null)
    }


    //handle dialog open/close functions
    let handleDialogOpen = () => {
        setisDialogOpen(true)
    }

    let handleDialogClose = () => {
        setisDialogOpen(false)
        setprodData(null)
    }

    const [allProducts, setallProducts] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        let fetchProducts = async () => {
            let result = await axios.get('https://dummyjson.com/products')
            // 
            setFilterProd(result.data.products)
            console.log("DATA", result.data.products);
            setallProducts(result.data.products)
        }

        fetchProducts()
    }, [])


    useEffect(() => {

        if (selectedBrand == "All") {
            setFilterProd(allProducts)
        }
        else {
            setFilterProd(allProducts.filter((prod) => prod.brand == selectedBrand))
        }

    }, [selectedBrand])





    let brandList = ["All", "Chanel", "Dior", "Annibale Colombo", "Bath Trends"]


    return (
        <>

            <Stack direction="row" mt={3} spacing={3} mb={3}>
                {
                    brandList.map((brand) => {
                        return (
                            <Chip key={brand}
                                label={brand}
                                clickable
                                color='primary'
                                onClick={() => {
                                    setselectedBrand(brand)
                                }} />
                        )
                    })
                }
            </Stack>
            <Grid2 container spacing={3} padding={3}>
                {
                    filterProd.map((item) => {
                        return (
                            <Grid2 size={{
                                sm: 12,
                                md: 6,
                                lg: 3
                            }} key={item.id}>
                                <item>
                                    <Card>
                                        <CardMedia
                                            component='img'
                                            src={item.thumbnail}
                                            height={150}
                                            onClick={() => {
                                                setprodData(item)
                                                handleDialogOpen()
                                            }} />
                                        <CardContent>
                                            <Typography variant='h5'>{item.title}</Typography>
                                            <Typography variant='h6'>{item.price}</Typography>
                                            <Typography variant='h6'>{item.brnd}</Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex' }}>
                                            <Button fullWidth onClick={() => navigate('/proddetails', {
                                                state: item
                                            })}>
                                                View Details
                                            </Button>

                                            <IconButton id={item.id}
                                                aria-controls={menuAnchor ? item.id : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={menuAnchor ? 'true' : undefined}
                                                onClick={(e) => handleOpen(e)} aria-label={item.id}>
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                id={item.id}
                                                anchorEl={menuAnchor}
                                                open={Boolean(menuAnchor)}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': item.id,
                                                }}>
                                                <MenuList>
                                                    <MenuItem>
                                                        <ListItemIcon>

                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            Details
                                                        </ListItemText>
                                                    </MenuItem>

                                                    <MenuItem onClick={() => {
                                                        dispatcher(addItem(item))
                                                        alert("Added")
                                                    }}>
                                                        <ListItemIcon>

                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            Add To Cart
                                                        </ListItemText>
                                                    </MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </CardActions>
                                    </Card>
                                </item>
                            </Grid2>
                        )
                    })
                }
            </Grid2>

            <Dialog open={isDialogOpen}
                onClose={handleDialogClose}>
                <DialogTitle>Product Details</DialogTitle>
                <DialogContent>
                    <Card>
                        <Box>
                            <CardMedia component="img"
                                height={150}
                                src={prodData?.thumbnail} />
                            <CardContent>
                                <Typography variant='h5'>{prodData?.title}</Typography>
                                <Typography variant='h6'>{prodData?.description}</Typography>
                                <Typography variant='h5'>{prodData?.price}</Typography>
                                <Typography variant='h6'>{prodData?.brand}</Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose()} variant='outlined'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default Products