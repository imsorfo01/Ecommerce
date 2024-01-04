import React from 'react'

export default function ProductCard({item}) {
  // console.log(item)
  return (
    <div className='py-1 hover:shadow-2xl mx-3'>
      <div>
        <img className='h-36 w-52 zoom-out' src={item.image} alt="img" />
      </div>
      <div className='w-52 flex justify-between  items-center mb-2'>
        <h1 className='text-xs font-semibold'>{item.name}</h1>
        <h1 className='text-xs font-semibold'>{" ₹ "+item.price/100}</h1>
      </div>
    </div>
  )
}
