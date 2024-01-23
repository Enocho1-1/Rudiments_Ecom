import { useEffect,useState } from "react"
import { fetchIndividualItem } from "../utility/ProductServices"

export const useIndividualItem = (id) => {
    const [data,setData] = useState([])
    // Fetch Individual Item
    useEffect(() => {fetchIndividualItem(id,setData) },[id])
  return {data}
}
