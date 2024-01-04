import React, { useEffect, useState } from "react";
import Category from "./Category";
import useAllProductData from "../utility/useAllProductData";
import { useDispatch, useSelector } from "react-redux";
import { addToProductList } from "../utility/productSlice";

export default function Sidebar({ data }) {
  const dispatch = useDispatch()
  const [productData, setproductData] = useState(null);
  const [inputValue, setinputValue] = useState("");
  

  const inputOnChnageFn =(e)=>{
      setinputValue(e.target.value)
  }

  useEffect(() => {
    const data = useAllProductData()
    data.then((e)=>{
      setproductData(e)
    })
  }, []);
  const clickHandler =()=>{
    const searchResult = productData?.filter((e)=>{
      
      return e.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    if (searchResult.length !==0) {
      dispatch(addToProductList(searchResult))
    }
  }

  return (
    <div className="">
      <div className="flex items-center gap-1 py-2">
        <input
          placeholder="Search Here"
          value={inputValue}
          type="text"
          onChange={inputOnChnageFn}
          className="border w-12 mx-[2px] md:w-32 px-1 md:px-3 text-xs py-1 font-semibold border-blue-200 outline-none"
        />
        <button onClick={clickHandler} className="md:px-2 py-1 px-1 text-white md:font-semibold hover:opacity-80 text-[10px] md:text-sm  hover:text-black bg-violet-600">
          Search
        </button>
      </div>
      
      <Category data={data} />
    </div>
  );
}
