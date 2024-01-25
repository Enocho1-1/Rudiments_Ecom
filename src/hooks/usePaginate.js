import {useState} from "react"
import {useFilter} from "../context/filterContext"

export const usePaginate = (number) => {
    const {product} = useFilter()
    const [page, setPage] = useState(1)
    const [postsPerPage] = useState(number)

    const lastIndex = page * postsPerPage
    const firstIndex = lastIndex - postsPerPage
    const products = product.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => {
        setPage(pageNumber)
      }
    
  return {page,setPage,products,postsPerPage,paginate}
}

