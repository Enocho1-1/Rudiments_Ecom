import {useEffect} from "react"
import {useFilter} from "../context/filterContext"
import {fetchProducts} from "../utility"

export const useAllProducts = () => {
    const { product, allProducts} = useFilter()

      // Fetch All Products
  useEffect(() => {fetchProducts(allProducts)},[])
  return null
}
