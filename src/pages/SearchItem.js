import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const SearchItem = ({apiPath}) => {
  const searchParam = useSearchParams()
  const queryItem = searchParam.get('search=')
  console.log(queryItem)
  return (
    <div>
      
    </div>
  )
}

 
