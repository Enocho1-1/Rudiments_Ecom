import { createSlice } from "@reduxjs/toolkit";

// const addtoLocalStore = (cart,total) => {}
const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: [],
        total: 0
    },
    reducers :{
        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)
            const updateTotal = state.total + action.payload.price 

    
            return {...state, cartItems:updateCart, total:updateTotal}
        },

        removeItemCart(state,action){
            
            const updateCart = state.cartItems.filter(item => item.random_index !== action.payload.random_index)
            const updateTotal = state.total > 0 ? state.total - action.payload.price : 0

       
            return {...state, cartItems:updateCart, total:updateTotal}
        },

        increaseQuantity(state,action){
            const updateCartItem = state.cartItems.find( item => item.random_index === action.payload.random_index)
            let updateTotal 

            if(updateCartItem.quantity >= 1){
                updateCartItem.quantity += 1 
                updateTotal = state.total += updateCartItem.price
            }

       }
        // removeItemToTotalPrice(state,action){
           
        //     const updateTotal = state.total > 0 ? state.total - action.payload.price : 0
        //     return { ...state, total:updateTotal }
        // },
    }
})

export const { addItemToCart,increaseQuantity, removeItemCart} = CartSlice.actions
export const cartReducers = CartSlice.reducer