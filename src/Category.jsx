import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToProductList } from '../utility/productSlice';
import useAllProductData from '../utility/useAllProductData';

export default function Category( { data } ) {
    const [allProducts, setallProducts] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
      const alldataList = useAllProductData()
      alldataList.then((e)=>setallProducts(e))
    }, []);
    
     const Laptop = allProducts?.filter((e)=>e.category=="laptop")
     const mobile = allProducts?.filter((e)=>e.category=="mobile")
     const computer = allProducts?.filter((e)=>e.category=="computer")
     const accessories = allProducts?.filter((e)=>e.category=="accessories")
     const watch = allProducts?.filter((e)=>e.category=="watch")
    //  console.log(mobile)
    //  console.log(mobile)

    // filter Functions
    const showLaptops =()=>{
        dispatch(addToProductList(Laptop))
    }
    const showAllItem =()=>{
        dispatch(addToProductList(allProducts))
    }
    const showMobiles =()=>{
        dispatch(addToProductList(mobile))
    }
    const showComputer =()=>{
        dispatch(addToProductList(computer))
    }
    const showAccessories =()=>{
        dispatch(addToProductList(accessories))
    }
    const showWatch =()=>{
        dispatch(addToProductList(watch))
    }
    
    
  return (
    <div>
      <h1 className='text-center px-1  text-white text-[12px] font-semibold'>Category</h1>
      <ul className='category'>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0' onClick={showAllItem}>All</li>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0' onClick={showLaptops}>Laptop</li>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0' onClick={showMobiles}>Mobile</li>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0' onClick={showComputer}>Computer</li>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0r' onClick={showAccessories}>Accessories</li>
        <li className='cursor-pointer md:bg-gray-50 bg-gray-300 mb-[1px] text-blue-700 underline md:mb-0' onClick={showWatch}>Watch</li>
      </ul>
      
    </div>
  )
}
