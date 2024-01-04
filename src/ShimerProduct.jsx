import React from 'react'
import Sidebar from './Sidebar'

export default function ShimerProduct() {
    const itemList = ['a','a','a','a','a','a','a','a','a','a','a','a',]
  return (
    <div className='flex w-[90%] m-auto'>
        <div className='w-3/12 '><Sidebar></Sidebar></div>
      <div className='ml-10 mt-2 m-auto flex flex-wrap '>
        {itemList.map((e,i)=><div key={i} className='md:w-52  w-42 h-48 bg-gray-300 m-1 '></div>)}
      </div>
    </div>
  )
}
