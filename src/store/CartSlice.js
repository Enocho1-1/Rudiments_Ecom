import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: JSON.parse(localStorage.getItem("cartItem")) || [],
        totalQuantity:0,
        total: 0
    },
    reducers :{

        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)
            // const updateTotal = state.total + action.payload.price 

            localStorage.setItem("cartItem",JSON.stringify(updateCart))
            return {...state, cartItems:updateCart}
        },

        removeItemCart(state,action){
            
            const updateCart = state.cartItems.filter(item => item.random_index !== action.payload.random_index)
            // const updateTotal = state.total > 0 ? state.total - action.payload.price : 0

            localStorage.setItem("cartItem",JSON.stringify(updateCart))
            return {...state, cartItems:updateCart}
        },

        increaseQuantity(state,action){
            const updateCartItem = state.cartItems.find( item => item.random_index === action.payload.random_index)
            let updateTotal 

            if(updateCartItem.quantity >= 1){
                updateCartItem.quantity += 1 
                localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
                // updateTotal = state.total += updateCartItem.price
            }

       },

        decreaseQuantity(state,action){
            const updateCartItem = state.cartItems.find( item => item.random_index === action.payload.random_index)
            let updateTotal, updateCart


            if(updateCartItem.quantity > 1){
                updateCartItem.quantity -= 1 
                localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
                // updateTotal = state.total -= updateCartItem.price
            } else{
                 updateCart = state.cartItems.filter(item => item.random_index !== action.payload.random_index) 
                 return {...state, cartItems:updateCart}
            }

    
        }

    }
})

export const { addItemToCart, removeItemCart,increaseQuantity, decreaseQuantity} = CartSlice.actions
export const cartReducers = CartSlice.reducer