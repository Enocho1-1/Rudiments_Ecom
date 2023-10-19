import { useEffect, useState } from "react";
import { fetchClothingPiece } from "../utility";


export const useFetch = (apiPath, queryItem = "", productId = "") => {
  const endPoint = apiPath
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch Clothing Piece and user search
    fetchClothingPiece(endPoint,queryItem,productId,setData,setLoading)
    
  },[endPoint,queryItem, productId])
  return { data, loading }
}
