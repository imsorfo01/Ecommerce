import React from "react";
import { shoppingImage } from "../utility/constant";
import { Link } from "react-router-dom";

export default function HeroSection({ name }) {
  return (
    <div className="md:px-2 px-3 md:flex flex justify-center md:justify-center md:mt-20 mt-16 md:gap-10 gap-3">
      <div className=" md:w-2/4 w-2/4 md:gap-1">
        <p className="md:font-semibold text-xs font-semibold ptag">Welcome to</p>
        <p className="ptag md:text-4xl text-xl font-semibold md:font-bold">{name} Store</p>
        <p className="ptag text-[11px] font-semibold md:text-sm">
          Stay ahead in the digital age with our cutting-edge electronics.
          Whether you're upgrading your smartphone, exploring smart home
          solutions, or diving into the world of virtual reality, UrbanTrends
          has the tech essentials to keep you connected and entertained.
        </p>
        <Link to={'/products'}><button className="md:px-4 px-1 md:py-1 text-white bg-violet-600 hover:opacity-80 md:hover:opacity-90 text-sm hover:font-semibold md:cursor-pointer">
          Shop Now
        </button></Link>
      </div>
      <div className="relative">
        
        <img className=" h-48" src={shoppingImage} alt="shop" />
        
        <div className="md:w-36 md:h-36 md:bg-violet-600 md:absolute md:-top-8 md:-right-8 md:-z-10"></div>
      </div>
      
    </div>
    
  );
}
