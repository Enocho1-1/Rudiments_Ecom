import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
    const pathname = useLocation()  
    useEffect( () => {
      window.scrollTo(100,20)
    },[pathname])

  return null
}
