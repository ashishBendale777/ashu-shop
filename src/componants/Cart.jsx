import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatetotal } from '../reduxwork/CartSlice'
import { Button, Card, CardContent, CardMedia, Grid2, Stack, Typography } from '@mui/material'


const Cart = () => {
  let { cartItems, cartTotal } = useSelector((state) => state.cart)

  let dispatcher = useDispatch()


  return (
    <>
      [dispatcher(calculatetotal())]
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
              } key={item._id}>
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
                  </Card>
                </item>
              </Grid2>
            )
          })
        }
      </Grid2 >
      <Stack direction="row">
        <Typography variant='h2'>Total {cartTotal}</Typography>
        <Button variant='contained' color='success'>Place Order</Button>
      </Stack>
    </>
  )
}

export default Cart