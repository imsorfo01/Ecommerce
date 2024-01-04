import React from "react";
import { useEffect, useState } from "react";
import useAllProductData from "../utility/useAllProductData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import ShimerProduct from "./ShimerProduct";
import Horizontalbar from "./Horizontalbar";
import ProductListViewCard from "./ProductListViewCard";

export default function Product() {
  const [data, setdata] = useState(null);
  const viewData = useSelector((store) => store.view.gridView);
  const storedData = useSelector((store) => store.product.productList);

  useEffect(() => {
    if (storedData.length == 0) {
      const a = useAllProductData();
      a.then((e) => {
        setdata(e);
      });
      // console.log(data)
    } else {
      setdata(storedData);
    }
  }, [storedData]);

  return !data?<ShimerProduct/>: (
    <div className="flex md:w-[90%] m-auto">
      <div className="md:w-3/12 w-[25%] md:bg-gray-100 shadow-2xl">
        <Sidebar data={data} />
      </div>

      <div className="w-9/12 md:mt-0 mt-2">
        <Horizontalbar productNo={data} />

        
            {viewData && (
          <div className="flex flex-wrap ml-[10%]">
            {data?.map((e) => (
              <Link key={e.id} to={"/singleproduct/" + e.id}>
                <ProductCard item={e} />
              </Link>
            ))}
          </div>
        )}

        {!viewData && (
          <div>
            {data?.map((e) => (
              
                <ProductListViewCard key={e.id} item={e} />
              
            ))}
          </div>
        )}
        

      </div>

    </div>
  );
}
