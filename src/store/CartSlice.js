import { createSlice } from "@reduxjs/toolkit";


function AddtolocalStorage(cart, total){
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('total', JSON.stringify(total))
}
const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        total: JSON.parse(localStorage.getItem('total')) || 0
    },
    reducers :{
        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)
            const updateTotal = state.total + action.payload.price 
            AddtolocalStorage(updateCart, updateTotal)
            return {...state, cartItems:updateCart, total:updateTotal}
        }
    }
})

export const { addItemToCart } = CartSlice.actions
export const cartReducers = CartSlice.reducer