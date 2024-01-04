import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import ShimerFeature from './ShimerFeature'
import { Link } from 'react-router-dom'


export default function Feature() {
    const featuredItems = useSelector(store=>store?.product?.feturedProductList)
    if (!featuredItems) return <ShimerFeature/>;
    
  return (
    <div className='md:bg-gray-100 mt-[10px] md:mt-[100px] '>
        <h2 className='md:font-semibold md:relative text-center md:ml-5 text-sm font-bold md:text-lg px-3 py-1 mx-1 bg-gray-400'>Our Featured Product</h2>
        <div className='md:flex md:items-center md:justify-center md:gap-3 px-3 md:px-4 '>
        
      {featuredItems?.map((e)=> <Link  key={e.id} to={'/singleproduct/'+e.id}><div className='w-52 m-auto'><ProductCard item={e}/></div></Link>
        
      )}
    </div>
    </div>
  )
}
