import { useState,useEffect } from "react"
import { useFilter } from "../context/filterContext"
import {getUserOrders} from "../utility/index"

export const useUserOrders = () => {
    const { retrieveUserInfo } = useFilter()
    const {userToken,userID } = retrieveUserInfo()

    const [data,setData] = useState([])
    const [ noOrder,setNoOrder] = useState(true)

    const Options = {
        method:"GET",
        headers:{ 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}`}
      }
    
      useEffect(() => {
        getUserOrders(Options,setData,setNoOrder,userID)
     },[])
  return {data,noOrder}
}
