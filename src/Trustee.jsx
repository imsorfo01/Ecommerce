import React from 'react'
import { mahindraLogo, relaincelogo, tatalogo } from '../utility/constant'

export default function Trustee() {
  return (
    <div className='z-50 md:w-1/4 w-56 m-auto rounded-3xl absolute md:left-[38%] md:-bottom-[35%] bottom-2 left-[18%] md:py-1  bg-gray-300'>
      <div>
        <p className='font-semibold text-center pt-[3%] mb-2 text-xs'>Trusted By 1000+ Companies</p>
        <ul className='flex items-center justify-center gap-10'>
            <li><img className='rounded-full w-7 h-7' src={tatalogo} alt="tatalogo" /></li>
            <li><img className='rounded-full w-7 h-7' src={mahindraLogo} alt="mahindraLogo" /></li>
            <li><img className='rounded-full w-7 h-7' src={relaincelogo} alt="relaincelogo" /></li>
        </ul>
      </div>
    </div>
  )
}
