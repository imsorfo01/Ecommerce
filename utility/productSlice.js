import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:[],
        feturedProductList:[],
        singleProductData:null,
    },
    reducers:{
        addToProductList:(state,action)=>{
            state.productList = action.payload
        },
        addTofeturedProductList:(state,action)=>{
            state.feturedProductList = action.payload
        },
        addSingleProductData:(state,action)=>{
            state.singleProductData = action.payload;
        }
        
    }
})

export const { addToProductList,addSingleProductData,addTofeturedProductList }= productSlice.actions
export default productSlice.reducer