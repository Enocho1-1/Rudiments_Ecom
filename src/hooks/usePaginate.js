import {useState} from "react"


export const usePaginate = (number,array) => {

    const [page, setPage] = useState(1)
    const [postsPerPage] = useState(number)

    const lastIndex = page * postsPerPage
    const firstIndex = lastIndex - postsPerPage
    const products = array.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => {
        setPage(pageNumber)
      }
    
  return {page,setPage,products,postsPerPage,paginate}
}

