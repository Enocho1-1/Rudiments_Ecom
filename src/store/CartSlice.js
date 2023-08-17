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

            const duplicateItem = state.cartItems.find(item => item.id == action.payload.id)
            const differentSize = state.cartItems.find( item => item.size == action.payload.size)
            const updateCart = state.cartItems.concat(action.payload)
            const updateTotal = state.total + action.payload.price 

            if(duplicateItem){
                duplicateItem.quantity++
                const doubleTotal = state.total + duplicateItem.price
                
                state.total = doubleTotal
               
            } else {
               
                AddtolocalStorage(updateCart, updateTotal)
                return {...state, cartItems:updateCart, total:updateTotal}
            }

            
        },

        removeItemCart(state,action){
            
            const updateCart = state.cartItems.filter(item => item.id !== action.payload.id)
            const updateTotal = state.total > 0 ? state.total - action.payload.price : 0

            if(action.payload.quantity > 1){
                const subtractQuantity = action.payload.quantity--
                action.payload.quantity = subtractQuantity
            } else {
                
                AddtolocalStorage(updateCart, updateTotal)
                return {...state, cartItems:updateCart, total:updateTotal}
            }
           
        }
    }
})

export const { addItemToCart,  removeItemCart } = CartSlice.actions
export const cartReducers = CartSlice.reducer