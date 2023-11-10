/* eslint-disable */
import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useFilter } from "../../../context/filterContext"
import { getSubTotal } from "../../../store/CartSlice"
import { Link } from "react-router-dom"
import { CartItem } from "./CartItem"


export const SideCart = ({setSideCart}) => {

  const {  retrieveUserInfo } = useFilter()
  const { userToken } = retrieveUserInfo()
  const cart = useSelector( state => state.cart.cartItems )
  const total = useSelector( state => state.cart.total )
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(getSubTotal())
  },[cart])

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 w-screen flex justify-end z-40" id="modalOverlay">
      {/* Side Cart */}
        <div className="absolute flex flex-col top-0  bg-white h-full mobile:max-tablet:w-[100%] desktop:max-Lrgmoniter:py-4 Lrgmoniter:py-2 tablet:max-desktop:w-[35%] desktop:w-[25%]">
            <header className="mt-6 px-4 flex flex-row justify-between">
                <h1 className="text-2xl font-Bebas">Cart</h1>
                <svg onClick={() => {setSideCart(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </header>

            {/* Cart Items */}
            <aside className=" mt-2 px-4  h-[300px] laptop:h-[400px] overflow-y-scroll">
                <h1 className="text-xl font-semibold font-Inconsolata text-center block">ADDED ITEM<span>({cart.length})</span></h1>
             
              <div className="flex flex-col justify-evenly p-2">
                { cart.map( (item, index) => (
                  <CartItem key={index} product={item} />
                ))}
              </div>
            </aside>
            {/*  Total */}
            <aside className="mt-2 px-8 flex flex-row justify-between">
              <p className="font-Bebas text-xl">Total (Excl. delivery)</p>
              <p>${total}.00</p>
            </aside>
            <Link to="/cart" className=" text-xl font-Bebas text-center mt-4 mx-4 border-1 border-black p-2 hover:text-slate-500">View Bag </Link>
            { userToken && (<Link to="/checkout/delivery" className="text-xl font-Bebas bg-yellow-300  text-center mt-4 mx-4 border-1  p-2 text-black hover:text-black">CHECKOUT</Link>)}
        </div>
    </section>
  )
}
