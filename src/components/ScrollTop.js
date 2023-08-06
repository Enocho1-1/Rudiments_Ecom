import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
    const pathname = useLocation()  
    useEffect( () => {
        const scrollToTop = () => window.scrollTo(0,0)
        console.log(pathname)
        scrollToTop()
    },[pathname])

  return null
}
