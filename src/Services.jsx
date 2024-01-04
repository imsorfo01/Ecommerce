import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';


export default function Services() {
  return (
    <div className='flex items-center justify-center gap-2 my-4'>
      <div className='w-72  h-52 bg-gray-300 flex items-center justify-center'>
        <div className='p-2 text-center'>
            <p className='text-center text-violet-700'><LocalShippingOutlinedIcon/></p>
            <h1 className='font-semibold'>Fast Delivery And Free Shipping</h1>
        </div>
      </div>
      <div className='w-72 p-2 h-52 '>
        <div className='w-full h-1/2 mb-1 bg-gray-300 flex items-center justify-center gap-2'>
          <span className='text-violet-600'><SecurityOutlinedIcon/></span>
          <p className='font-semibold'>Non-Contact Shipping</p>
        </div>
        <div className='w-full h-1/2 bg-gray-300 flex items-center justify-center gap-2'>
          <span className='text-violet-600'><CurrencyExchangeOutlinedIcon/></span>
          <p className='font-semibold'>Money Back guaratnted</p>
        </div>
      </div>
      <div className='w-72 h-52 bg-gray-300 flex items-center justify-center'>
        <div className='p-2 text-center'>
        <p className='text-violet-600 text-center'><GppGoodOutlinedIcon/></p>
        <p className='font-semibold'>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  )
}
