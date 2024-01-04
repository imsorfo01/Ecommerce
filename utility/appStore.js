import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import imageReducer from './imageSlice'
import viewReducer from './viewSlice'
import cartReducer from "./cart"
import userReducer from './userSlice'

const appStore = configureStore({
    reducer:{
      product:productReducer,
      image:imageReducer,
      view:viewReducer,
      cart:cartReducer,
      user:userReducer,

    }
})

export default appStore;