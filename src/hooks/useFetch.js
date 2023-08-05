import { useEffect, useState } from "react";


export const useFetch = (apiPath) => {
  const endPoint = apiPath
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch(`https://api.mocki.io/v2/f3308aac${endPoint}`)
        const result = await response.json()
        setData(result)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[endPoint])
  return { data }
}
