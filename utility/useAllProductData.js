import { productURL } from "./constant"

const useAllProductData = async()=>{
   const data = await fetch(productURL);
   const json = await data.json()
   return json
}

export default useAllProductData;
