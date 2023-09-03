import { createSlice } from "@reduxjs/toolkit"

export const RecentSlice = createSlice({
  name:"recent",
  initialState : {
   recentItems: []
  },
  reducers: {
    addRecent:(state,action)=>{
      const updateViews = state. recentItems.concat(action.payload)
      return { ...state,  recentItems: updateViews}
    }
  }

})

export const { addRecent } = RecentSlice.actions
export const recentReducer = RecentSlice.reducer

 

