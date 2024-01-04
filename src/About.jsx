import React from 'react';
import HeroSection from './HeroSection';
import Trustee from './Trustee';
import Services from './Services';

export default function About() {
  return (
    <div className= 'md:h-fit relative -right-8 '>
      <div className='relative'>
        <HeroSection name={"Sarfraz"}/>
      </div>
      <div className='w-[80%] m-auto mb-20  '>
        <Services/>
      </div>
      <div className='md:relative md:-bottom-8 absolute left-10 md:left-0 -bottom-[120px]'>
        <Trustee/>
      </div>
    </div>
  );
}
