import { createSlice } from "@reduxjs/toolkit";


const viewSlice = createSlice({
      name: "view",
      initialState: {
        gridView: true,
      },
      reducers:{
        toggleGridView:(state)=>{
            state.gridView = !state.gridView
        }
      }
})


export const { toggleGridView } = viewSlice.actions
export default viewSlice.reducer;