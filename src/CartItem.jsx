import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { addOrderSummary, deleteFromCartItemList, editorderSummary } from "../utility/cart";
import { Link } from "react-router-dom";

export default function CartItem({ cartData }) {
  const dispatch = useDispatch();
  const [count, setcount] = useState(0);
  const [confirm, setconfirm] = useState("Confirm");

  const hndleConfirm = () => {
    setconfirm("Confirmed");
    dispatch(addOrderSummary({roundedPrice:roundedPrice,id:cartData.id,count:count}))
  };
  const editFn = ()=>{
    setcount(count)
    setconfirm("Confirm")
    // dispatch(editorderSummary(cartData.id))
    // console.log(cartData.id)
    dispatch(editorderSummary(cartData.id))
  }
  const increaseCount = () => {
    document.querySelector(".userReminder").innerHTML = ""
    if (count < stock) {
      setcount(count + 1);
      // console.log(stock)
    } else if (count == stock) {
      setcount(stock);
    } else {
      setcount(0);
    }
  };
  const decreaseCount = () => {
    if (count == 0) {
      setcount(0);
    } else {
      setcount(count - 1);
    }
  };
  
  const { price, image, name, stock,id } = cartData;
  const handleDelete = () => {
    dispatch(deleteFromCartItemList(cartData.id));
    dispatch(editorderSummary(cartData.id))
  };
  // console.log(typeof price)
  const OriginalPrice = price/10 * count
  const roundedPrice = OriginalPrice.toFixed(2)
  return (
    <div className="flex items-center justify-between md:w-2/4 w-10/12 m-auto md:gap-1 gap-1 p-2 shadow-2xl text-[7px] md:text-xs font-semibold text-center">
      <div className="flex flex-col items-center">
        <h2 className=" font-semibold md:font-bold">{name}</h2>
        <Link to={"/singleproduct/"+id}><img
          className="md:h-24 cursor-pointer w-24 md:w-36"
          src={image?.[0].url}
          alt="image"
        /></Link>
      </div>

      <h2>Subtotal: ₹{roundedPrice}/-</h2>
      <h2>Quantity : {count}</h2>
      <div>
        <p>Stock: {stock}  </p>
        {confirm=="Confirm" && <div className="flex items-center gap-2 ">
          <button className="px-[1px] py-[1px] bg-slate-400 text-white rounded-full text-[14px] cursor-pointer" onClick={increaseCount}>
            +
          </button>
          <span className="text-xs ">{count}</span>
          <button className="px-[3px] py-[1px] bg-slate-400 text-white rounded-full text-[14px] cursor-pointer" onClick={decreaseCount}>
            -
          </button>
        </div>}
      </div>

      <div className="cursor-pointer flex">
        <span onClick={handleDelete} className="text-red-600">
          <DeleteOutlineIcon />
        </span>
        {count>0 && <button
          onClick={hndleConfirm}
          className="md:px-1 md:py-1 px-[4px] text-[8px] md:text-xs text-white bg-green-400 font-semibold "
        >
          {confirm}
        </button>}
        {confirm=="Confirmed" && <button onClick={editFn} className="px-1 py-1 md:text-xs text-white bg-green-400 font-semibold ml-2">Edit</button>}
      </div>
      
    </div>
  );
}
