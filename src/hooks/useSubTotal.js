import {useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { getSubTotal } from "../store/CartSlice"

export const useSubTotal = () => {
    
  const cart = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubTotal())
  },[cart])

  return {cart}
}
