import React, { useEffect } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleGridView } from "../utility/viewSlice";
import { useState } from "react";
import useAllProductData from "../utility/useAllProductData";
import { addToProductList } from "../utility/productSlice";

export default function Horizontalbar({ productNo }) {
  const [allProducts, setallProducts] = useState(null);
  const [selectedValue, setselectedValue] = useState("");
  const viewData = useSelector((store) => store.view.gridView);
  const dispatch = useDispatch();

  // functions
  const showGridView = () => {
    dispatch(toggleGridView());
  };

  const handleOptionClick = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setselectedValue(value);
    if (e.target.value == "a-z") {
      const azFilterList = allProducts?.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      dispatch(addToProductList(azFilterList));
    } else if (e.target.value == "z-a") {
      const azFilterList = allProducts?.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      const reverseList = azFilterList.reverse();
      dispatch(addToProductList(reverseList));
    }else if(e.target.value = 'less than 15000'){
      const lessThan15000 = allProducts?.filter((e)=>e.price/100<=1500)
      dispatch(addToProductList(lessThan15000))
    }

  };

  useEffect(() => {
    const alldataList = useAllProductData();
    alldataList.then((e) => setallProducts(e));
  }, [selectedValue]);

  return (
    <div className="flex items-center mx-1 md:justify-between justify-between md:my-2">
      <div className="cursor-pointer">
        <span
          className="bg-slate-500 text-white md:py-[2px] py-[0px] md:mx-0 mx-[2px] md:px-1 "
          onClick={showGridView}
        >
          {viewData ? <MenuOutlinedIcon /> : <GridViewOutlinedIcon />}
        </span>
      </div>
      <h1 className="md:text-sm text-[10px] font-semibold">
        ({productNo?.length} Products Available)
      </h1>
      <div>
        <select className="w-[60px] outline-none border border-violet-400 px-1 text-[10px] md:text-sm md:w-fit font-bold" onChange={handleOptionClick} value={selectedValue}>
          <option>Sort By</option>
          <option value="a-z">(a-z)</option>
          <option value="z-a">(z-a)</option>
          <option value="less than 15000">(Less than 15000)</option>
        </select>
      </div>
    </div>
  );
}
