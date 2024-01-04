import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trustee from './Trustee';
import { useEffect } from 'react';
import { productURL } from '../utility/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addToProductList, addTofeturedProductList } from '../utility/productSlice';
import Feature from './Feature';

export default function Home() {
  const dispatch = useDispatch()
   const storedData = useSelector((store) => store.product.productList);
  const getProduct = async()=>{
      const data = await fetch(productURL);
      const json = await data.json()
      dispatch(addToProductList(json))
      const featureList = json.filter((e)=>e.featured)
      dispatch(addTofeturedProductList(featureList))
  }
  useEffect(() => {
    if (storedData.length==0) {
      getProduct()
    }
  }, []);
  return (
    <div >
      <HeroSection name={"Raaz"}/>
      <Feature/>
      <div className='relative mb-16 w-[80%] m-auto  md:mb-0'>
        <Services/>
      </div>
      
      <div className='md:pt-7 relative md:relative md:-bottom-7 -right-2 md:left-0  -bottom-10 '>
        <Trustee/> 
      </div>
    </div>
  );
}
