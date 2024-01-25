import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useClearSize = (setSelectSize) => {
    let location = useLocation()
    useEffect(() => {setSelectSize("Select Size")},[location])
  return null
}
