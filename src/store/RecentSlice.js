import { createSlice } from "@reduxjs/toolkit";

const RecentSlice = createSlice({
  name: "recent",
  initialState: [],
  reducers: {
    addRecent(state, action){
      console.log(action.payload)
    }
  }

})

export const { addRecent } = RecentSlice.actions
export const recentReducer = RecentSlice.reducer