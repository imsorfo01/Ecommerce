import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import {  emptyCart, emptyOrderSummary } from '../utility/cart'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(store=>store.user.userData)
  const orderSummary = useSelector(store=>store.cart.orderSummary)
  const cartItemList = useSelector(store=>store.cart.cartItemList)
  const user = useSelector(store=>store.user.userData)

  const checkOutFn =()=>{
    if (orderSummary?.length == 0 && user ) {
      document.querySelector(".userReminder").innerHTML ="Please Add Atleast 1 item"
    }else if( !user ){
      
      navigate("/login")
    }else{
      navigate("/checkout")
    }
    
  }
  const emptyCartFn =()=>{
    dispatch(emptyCart())
    dispatch(emptyOrderSummary())
  }
  
  return cartItemList.length==0?<EmptyCart/>: (
    <div className='h-screen mt-1'>
      <p className='userReminder text-center md:text-lg font-semibold text-[10px] text-red-600'></p>
      <div className='text-[10px] font-semibold ml-8'>
        <h2>Hi there..! {userData?.email}</h2>
      <h2 className='md:text-xs text-[8px]'>Your UserId is : {userData?.uid}</h2>
      </div>
      <div className='text-center mt-1'>
        
      </div>
      {cartItemList?.map((e)=><CartItem cartData={e}/>
      )}
      <div className='absolute right-5 flex flex-col gap-2'>
        <button onClick={checkOutFn} className=' px-1 bg-violet-600 text-white font-semibold  mt-3 text-xs md:text-lg cursor-pointer'>Checkout</button>
      <button className='px-2 py-1 bg-red-600 text-[10px]  text-white font-bold' onClick={emptyCartFn}>Clear Cart</button>
      </div>
      
    </div>
  )
}
