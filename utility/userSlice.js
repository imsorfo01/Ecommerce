import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData:null,
    },
    reducers:{
        addUserData:(state,action)=>{
            state.userData = action.payload
        },
        removeUserData:(state)=>{
            state.userData = null
        }
        
    }
})

export const { addUserData,removeUserData }=userSlice.actions
export default userSlice.reducer