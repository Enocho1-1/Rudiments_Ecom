import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems:[],
        totalPrice:0
    },
    reducers :{
        addItemToCart(state,action){
            console.log(action.payload)
        }
    }
})

export const { addItemToCart } = CartSlice.actions
export const cartReducer = CartSlice.reducers