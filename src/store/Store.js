import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./CartSlice";
import { recentReducer} from "./RecentSlice";

export const store = configureStore({
    reducer: {
        cart:cartReducers,
        recent:recentReducer
    }
})

