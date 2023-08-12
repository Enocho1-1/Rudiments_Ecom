import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems:[],
        totalPrice:0
    },
    reducers :{
        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)

            return {...state, cartItems: updateCart}
        }
    }
})

export const { addItemToCart } = CartSlice.actions
export const cartReducers = CartSlice.reducer