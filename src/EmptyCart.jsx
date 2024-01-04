import React from "react";
import { emptyCartLogo } from "../utility/constant";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="text-center p-3 h-screen">
      <h1 className="text-xl font-semibold">Cart is Empty</h1>
      <img
        className="md:w-80 w-52 h-fit opacity-40 m-auto"
        src={emptyCartLogo}
        alt="emptyCartLogo"
      />
      <Link to={'/products'}><button className="px-5 py-1 bg-violet-700 text-xl font-bold text-white">
        Explore
      </button></Link>
    </div>
  );
}
