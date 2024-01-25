import {useEffect} from "react"
import {useFilter} from "../context/filterContext"
import {fetchProducts} from "../utility"

export const useAllProducts = () => {
    const {allProducts} = useFilter()

  // Fetch All Products
  useEffect(() => {fetchProducts(allProducts)},[])
  return null
}
