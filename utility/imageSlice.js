import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: "image",
    initialState:{
        imageData: null,
    },
    reducers:{
        addImageData:(state,action)=>{
            state.imageData = action.payload
        }
    }
})

export const { addImageData } =imageSlice.actions;
export default imageSlice.reducer