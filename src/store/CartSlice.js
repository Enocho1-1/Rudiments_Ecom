import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems:[],
        total:0
    },
    reducers :{
        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)
            const updateTotal = state.total + action.payload.price 
            return {...state, cartItems:updateCart, total:updateTotal}
        }
    }
})

export const { addItemToCart } = CartSlice.actions
export const cartReducers = CartSlice.reducer