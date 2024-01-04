import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className='absolute  w-full md:flex flex text-xs items-center justify-center md:items-center md:justify-center md:gap-20 md:h-36 md:bg-slate-950 bg-slate-950 md:text-white  text-white px-2 md:px-0 md:mt-1'>
      <div>
        <h1 className='md:text-xl'>@Sarfraz Store</h1>
        <h2 className='md:text-xs text-xs'>Shop With Us to <br /> Great Experience  </h2>
      </div>

      <div className='mt-10 '>
        <h1 className='text-sm'>Subscribe To get  <br />Latest Updates</h1>
        <input type="email" placeholder='abc@gmail.com' className='md:px-5 px-1 outline-none text-black text-sm mt-1 py-1 rounded-lg md:w-fit w-24 sm:inline' />
        <button className='md:block  mt-1 md:mt-1 px-1 md:px-4 py-1 md:py-1 bg-violet-600 font-semibold rounded'>Subscribe</button>
      </div>

      <div>
        <h1 className='font-bg-green-600 md:font-semibold'>Follow Us On</h1>
        <ul className="flex gap-1 md:gap-3">
            
            <li><Link target='_self' to='https://www.facebook.com/sorfraj.ali'><FacebookOutlinedIcon/></Link></li>
            <li><Link target='_self' to='https://www.instagram.com/'><InstagramIcon/></Link></li>
            <li><Link target='_self' to='https://youtube.com/channel/UC1wp7bmvrEjuK7dlJggl2ZA'><YouTubeIcon/></Link></li>
        </ul>
      </div>

      <div>
        <h1 className='md:font-semibold '>Call Us</h1>
        <h1>+91 6003114769</h1>
      </div>
    </div>
  )
}
