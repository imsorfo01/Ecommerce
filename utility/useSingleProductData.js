import { productURL } from "./constant"

 const useSingleProductData = async({productId})=>{
    const data = await fetch(productURL+"?id="+productId)
    const json = await data.json()
    
}