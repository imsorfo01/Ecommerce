import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItemList: [],
        orderSummary: [],
        
    },
    reducers:{
        addToCartItemList :(state,action)=>{
            state.cartItemList.push(action.payload);
        },
        deleteFromCartItemList:(state,action)=>{
            const idToRemove = action.payload;
            state.cartItemList = state.cartItemList.filter((e)=>e.id !== idToRemove)
        },
        emptyCart:(state)=>{
            state.cartItemList = []
        },
        addOrderSummary :(state,action)=>{
            state.orderSummary.push(action.payload)
        },
        editorderSummary:(state,action)=>{
           const id = action.payload
           state.orderSummary = state.orderSummary.filter((e)=>e.id !==id)
        },
        emptyOrderSummary:(state,action)=>{
            state.orderSummary = []
        }
    }
})

export const { addOrderSummary,emptyOrderSummary,emptyCart,addToCartItemList,deleteFromCartItemList,editorderSummary }=cartSlice.actions;
export default cartSlice.reducer;