import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: JSON.parse(localStorage.getItem("cartItem")) || [],
        total: 0
    },
    reducers :{

        addItemToCart(state,action){
            const updateCart = state.cartItems.concat(action.payload)

            localStorage.setItem("cartItem",JSON.stringify(updateCart))
            return {...state, cartItems:updateCart}
        },

        removeItemCart(state,action){
            
            const updateCart = state.cartItems.filter(item => item.random_index !== action.payload.random_index)

            localStorage.setItem("cartItem",JSON.stringify(updateCart))
            return {...state, cartItems:updateCart}
        },

        increaseQuantity(state,action){
            const updateCartItem = state.cartItems.find( item => item.random_index === action.payload.random_index)
  
            if(updateCartItem.quantity >= 1){
                updateCartItem.quantity += 1 
                localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
            }

       },

        decreaseQuantity(state,action){
            const updateCartItem = state.cartItems.find( item => item.random_index === action.payload.random_index)
            let updateCart
            if(updateCartItem.quantity > 1){
                updateCartItem.quantity -= 1 
            } else{
                 updateCart = state.cartItems.filter(item => item.random_index !== action.payload.random_index) 
                 localStorage.setItem("cartItem",JSON.stringify(updateCart))
                 return {...state, cartItems:updateCart}
            }
        }, 

        getSubTotal(state,action){
            const {total} = state.cartItems.reduce((cartTotal,cartItem) => {
                const { price, quantity } = cartItem
                const itemTotal = price * quantity

                cartTotal.total += itemTotal
                return cartTotal
            },
            {
                total:0
            })

             state.total = total
        }

 

    }
})

export const { addItemToCart, removeItemCart,increaseQuantity, decreaseQuantity,getSubTotal} = CartSlice.actions
export const cartReducers = CartSlice.reducer