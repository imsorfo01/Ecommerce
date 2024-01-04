import React from 'react';
import { Route, Routes, createBrowserRouter} from "react-router-dom"
import Home from "./Home";
import Header from "./Header"
import About from './About'
import Contact from './Contact'
import Product from './Product'
import SingleProduct from './SingleProduct';
import Cart from "./Cart"
import { Provider } from 'react-redux';
import appStore from '../utility/appStore';
import Footer from './Footer';
import LogIn from './LogIn';
import CheckOut from './CheckOut';

export default function App() {
  
  return (
    <div className="h-screen">
      <Provider store={appStore}>
        <Header/>
      
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/singleproduct/:productId' element={<SingleProduct/>} />
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/checkout' element={<CheckOut/>}></Route>
         </Routes>
         <Footer/>
      </Provider>
         
     
    </div>
  );
}

