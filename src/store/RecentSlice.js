import { createSlice } from "@reduxjs/toolkit";

const RecentSlice = createSlice({
  name: "recent",
  initialState: {
    recents: []
  },
  reducers: {
    addRecent(state, action){
      const updateViews = state.recents.concat(action.payload)

      return{...state, recents:updateViews}
    }
  }

})

export const { addRecent } = RecentSlice.actions
export const recentReducer = RecentSlice.reducer