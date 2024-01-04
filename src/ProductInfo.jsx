import React from "react";
import Rating from "./Rating";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { useDispatch, useSelector } from "react-redux";
import {  addToCartItemList } from "../utility/cart";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link, useNavigate } from "react-router-dom";

export default function ProductInfo({ data }) {
  const dispatch = useDispatch()
  const singleProductData = useSelector(store=>store.product.singleProductData)
    const [count, setcount] = useState(0);
    const [cartAddstatus, setcartAddstatus] = useState(false);
  const { price, company, description, name, reviews, stars, stock } =
    data;
    const navigate = useNavigate()
//   console.log(data);
  // console.log(colors,company,description,name,reviews,stars,stock)
  
  const loadCart =()=>{
    dispatch(addToCartItemList(singleProductData))
    setcartAddstatus(!cartAddstatus)
    !cartAddstatus && navigate("/cart")
    
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{name}</h1>
      <Rating rating={stars} />
      <h2 className="text-[10px]">{reviews + " "} reviews</h2>
      <h3 className="text-[12px] font-semibold">MRP: ₹{price / 10} </h3>
      <p className="text-[10px] font-bold">
        <span className="text-[15px] ">Info: </span>
        {description}
      </p>
      <ul className="flex text-[7px] gap-1 md:gap-5 mt-1 py-2 bg-gray-200 w-fit px-3">
        <li className="bg-gray-400 p-1 rounded-lg ">
          <span className="">
            <LocalShippingOutlinedIcon />
          </span>
          <p className="text-white font-semibold">Free Delivery</p>
        </li>
        <li className="bg-gray-400 p-1 rounded-lg" >
            <span className="">
                <SecurityOutlinedIcon />
            </span>
            <p className="text-white font-semibold">
                Secure Payment
            </p>
        </li>
        
        <li className="bg-gray-400 p-1 rounded-lg" >
            <span className="">
              <CurrencyExchangeOutlinedIcon />
            </span>
          <p className="text-white font-semibold">
            7 Days Replacement Policy
          </p>
        </li>
        
      </ul>
      <div className="w-full h-[1px] mt-2 bg-gray-300"></div>
      <p className="text-[12px] font-semibold">In Stock : {stock}</p>
      <p className="font-semibold">Brand: {company}</p>
      <div className="w-full h-[1px] mt-2 bg-gray-300"></div>
      
      
        <button onClick={loadCart} className="text-[11px] px-1 bg-orange-950 text-white font-semibold md:text-sm">{cartAddstatus?"added":'Add To Cart'}</button>
      
      
    </div>
  );
}
