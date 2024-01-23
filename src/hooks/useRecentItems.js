import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRecent } from "../store/RecentSlice"

export const useRecentItems = (data,id) => {
    const recents = useSelector( state => state.recent.recents)
    const dispatch = useDispatch()

    useEffect(() => {dispatch(addRecent(data))},[id])
  return {recents}
}
