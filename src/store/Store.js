import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./CartSlice";

export const store = configureStore({
    reducer: {
        cart:cartReducers
    }
})

