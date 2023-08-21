import { useEffect, useState } from "react";


export const useFetch = (apiPath, queryItem = "") => {
  const endPoint = apiPath
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        setLoading(true)
        const response = await fetch(`https://api.mocki.io/v2/f3308aac${endPoint}${queryItem}`)
        const result = await response.json()
        setData(result)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[endPoint,queryItem])
  return { data, loading }
}
