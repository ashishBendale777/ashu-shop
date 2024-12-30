import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatetotal, clearCart, decrementQty, incrementQty } from '../reduxwork/CartSlice'
import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Stack, Typography } from '@mui/material'


const Cart = () => {
  let { cartItems, cartTotal } = useSelector((state) => state.cart)

  let dispatcher = useDispatch()


  dispatcher(calculatetotal())
  return (
    <>
      <Grid2 container spacing={3} padding={3}>
        {
          cartItems.map((item) => {
            return (
              <Grid2 size={
                {
                  sm: 12,
                  md: 6,
                  lg: 3
                }
              } key={item.id}>
                <item>
                  <Card>
                    <CardMedia component='img'
                      src={item.thumbnail}
                      height={160} />
                    <CardContent>
                      <Typography variant='h5'>{item.title}</Typography>
                      <Typography variant='h5'>{item.price}</Typography>
                      <Typography variant='h5'>{item.quantity}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => dispatcher(decrementQty(item.id))} >-</Button>
                      <Button onClick={() => dispatcher(incrementQty(item.id))}>+</Button>
                    </CardActions>
                  </Card>
                </item>
              </Grid2>
            )
          })
        }
      </Grid2 >

      <Stack spacing={4} direction="row">
        <Typography variant='h2'>Total {cartTotal}</Typography>
        <Button variant='contained' color='success'>Place Order</Button>
        <Button variant='contained' color='error' onClick={() =>
          dispatcher(clearCart())
        }>Clear</Button>
      </Stack>
    </>
  )
}

export default Cart