import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addRecent } from "../store/RecentSlice"

export const useRecent = ({product}) => {
    
    const recents = useSelector( state => state.recent.recentItems)
    // const [recents, setRecents] = useState([])
    const recentItem = product
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addRecent(product))
        console.log(recents)
    },[recentItem])

  return (
    <div>useRecent</div>
  )
}
