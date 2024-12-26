import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    cartTotal: 0,
    noOfItems: 0
}

let CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let newItem = { ...action.payload, quantity: 1 }
            state.cartItems = [...state.cartItems, newItem]
            state.noOfItems = state.cartItems.length
        },
        incrementQty: () => { },
        decrementQty: () => { },
        removeItem: () => { },
        calculatetotal: (state) => {
            let total = 0
            state.cartItems.forEach((item) => {
                total += item.price * item.quantity
            })
            state.cartTotal = total
        },
    }
})


export const { addItem, incrementQty,
    decrementQty,
    removeItem, calculatetotal } = CartSlice.actions
export default CartSlice.reducer