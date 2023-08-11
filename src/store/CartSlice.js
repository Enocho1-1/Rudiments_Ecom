import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems:[],
        totalPrice:0
    },
    reducers :{
        addItemToCart(state,action){
            // const cartItem = {
            //     id: action.payload.id,
            //     title: action.payload.title,
            //     price: action.payload.price,
            //     quantity: 1,
            //     size: size,
            //     imageURL: action.payload.imageURL
            // }

            console.log(action.payload)
        }
    }
})

export const { addItemToCart } = CartSlice.actions
export const cartReducers = CartSlice.reducer