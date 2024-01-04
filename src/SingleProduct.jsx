import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addSingleProductData } from "../utility/productSlice";
import { productURL } from "../utility/constant";
import { useState } from "react";
import { addImageData } from "../utility/imageSlice";
import ProductInfo from "./ProductInfo";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const productId = useParams();
  const mainImageData = useSelector((store) => store?.image?.imageData);
  const data = useSelector((store) => store?.product?.singleProductData);
  const [imageData, setimageData] = useState();

  useEffect(() => {
    singleProductData(productId);
  }, []);

  const singleProductData = async ({ productId }) => {
    const data = await fetch(productURL + "?id=" + productId);
    const json = await data.json();
    dispatch(addSingleProductData(json));
    setimageData(json.image);
  };

  return (
    <div className="h-screen">
      <h1 className="mx-3 mt-3 text-xs font-semibold"><Link to={'/'}><span className="cursor-pointer hover:underline text-blue-700 font-semibold">Home/</span> </Link>{data?.name}</h1>
      <div className="flex items-center justify-center gap-3 mt-[2%] md:w-[90%] m-auto">
        <div>
          {imageData?.map((e) => {
            // console.log(e.url)
            return (
              <img
                key={e.id}
                onClick={() => dispatch(addImageData(e))}
                src={e.url}
                alt="image"
                className="md:w-24 zoom-out cursor-pointer md:h-24 w-16 h-10 border border-black m-1"
              ></img>
            );
          })}
        </div>
        <div>
          <img
            src={!mainImageData ? imageData?.[0].url : mainImageData?.url}
            className="md:w-52 w-72  h-24 md:h-36"
            alt="img"
          />
        </div>
        <div className="w-2/4">
          {data && <ProductInfo data={data}/>}
        </div>
      </div>
    </div>
  );
}
