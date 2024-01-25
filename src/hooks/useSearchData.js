import { useState,useEffect} from "react"
import { userSearchItem } from "../utility"

export const useSearchData = (queryItem) => {
    const [data,setData] = useState([])

    useEffect(() => {
        userSearchItem(queryItem,setData)
      },[queryItem])
    
  return {data}
}
