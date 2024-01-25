import { useState,useEffect } from "react"
import { fetchClothingPiece } from "../utility"

export const usePieceData = (apiPath) => {
    const [data,setData] = useState([])

    useEffect(() => {
        fetchClothingPiece(apiPath,setData)
      },[apiPath])
  
      return {data}
}
