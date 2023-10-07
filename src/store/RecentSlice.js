import { createSlice } from "@reduxjs/toolkit";


const RecentSlice = createSlice({
  name: "recent",
  initialState: {
    recents: []
  },
  reducers: {
    addRecent(state, action){
      const duplicate = state.recents.find( item => item.id === action.payload.id)

      if(!duplicate){
        const updateViews = state.recents.concat(action.payload)
        sessionStorage.setItem("recents", JSON.stringify(updateViews))
        return{...state, recents:updateViews}
      } 
   
    }
  }

})

export const { addRecent } = RecentSlice.actions
export const recentReducer = RecentSlice.reducer