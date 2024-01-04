import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductListViewCard({ item }) {
  const [showDescription, setshowDescription] = useState(false);
  const { price, description, name } =
    item;
  // console.log(item);
  // console.log(stars)
  const showDescriptionFn =()=>{
    setshowDescription(!showDescription)
  }
  return (
        <div className="flex justify-between md:w-3/4 px-2 m-auto gap-1 md:gap-2 mb-4 hover:shadow-2xl py-2">
      <img className="md:w-52 w-36 h-20 zoom-out md:h-36 " src={item.image} alt="image" />
      <div className="flex flex-col gap-1">
        <div>
          <h1 className="md:text-lg text-[12px] text-slate-700 font-bold">{name}</h1>
        <h2 className="font-semibold md:text-xs text-[8px]"> Price: ₹{price / 100}/- only</h2>
        </div>
        <div onClick={showDescriptionFn} className="cursor-pointer text-[8px] md:text-xs px-2 py-1 bg-gray-700 w-fit opacity-60 font-semibold text-white rounded-xl ">More Info!</div>
        {showDescription && <h3 className="md:text-[8px] font-bold  text-[6px] bg-gray-200 px-1">{description}</h3>}
        <Link to={"/singleproduct/" + item.id}>
          <button className="md:px-1 px-2 md:mt-1 py-1 bg-violet-700 text-white font-semibold md:text-[12px] text-[7px]">
            Buy Product
          </button>
        </Link>
      </div>
    </div>
    
      
    
  );
}
