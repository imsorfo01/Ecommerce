import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckOut() {
    const orderSummary = useSelector(store=>store.cart.orderSummary)
    
    // working on price array
    const stringPriceArray = orderSummary.map((e)=>e.roundedPrice)
    const numberPriceArray = stringPriceArray.map((e)=>parseInt(e))
    const totalPrice = numberPriceArray.reduce((acc,currVal)=>{
        return acc + currVal;
    },0)
    

    // working on itemCount 
    const itemCount = orderSummary.map((e)=>e.count)
    const totalItemCount = itemCount.reduce((acc,currVal)=>{
        return acc + currVal;
    })
    const tax = totalPrice*.08
    
  return (
    <div className='md:h-full h-screen md:mt-0 mt-36'>
      <h2 className='md:absolute md:left-[25%] mt-2 font-bold text-center'>Order Summary </h2>
      <div className='md:w-96 m-auto h-fit px-10 py-3 shadow-lg  md:mt-5 relative md:top-[10%]  text-center text-sm font-semibold'>
        <h2>Total Items :  {totalItemCount}</h2>
      <h2>Total Price:  ₹{totalPrice} </h2>
      <h2>Tax(GST) :  ₹{tax}</h2>
      <div className='w-full h-[1px] bg-gray-600'></div>
      <h2>Subtotal :  ₹{totalPrice + tax}</h2>
      <button className='w-full bg-black text-white md:mt-3 '>Proceed To Payment</button>
    </div>

    </div>
  )
}
