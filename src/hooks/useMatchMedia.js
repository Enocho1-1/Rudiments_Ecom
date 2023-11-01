import { useState,useEffect } from "react"

export const useMatchMedia = (size) => {
    const [myQuery, setMyQuery] = useState({
        matches: window.innerWidth < size ? true : false
      })

      useEffect(() => {
        let mediaQuery = window.matchMedia(`(max-width: ${size}px)`)
        mediaQuery.addEventListener("change", setMyQuery)
       },[])
       
  return {myQuery}
}
