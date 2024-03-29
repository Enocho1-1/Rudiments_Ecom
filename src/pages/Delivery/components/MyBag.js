import { useSelector } from "react-redux/es/hooks/useSelector"
import { useFilter } from "../../../context/filterContext"
import { Link } from "react-router-dom"
import {PromoInput } from "../../../components"
import { BagItem } from "./BagItem"

export const MyBag = () => {
    const { state } = useFilter()
    const cart = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)
    const discountPrice = state.discount_price
  
   
  return (
    <aside className="relative h-fit min-w-[21.875rem] ml-4 p-4 bg-gray-200 flex flex-col max-[900px]:hidden">
        <h1 className="text-center text-2xl font-Inconsolata font-semibold">My bag ({cart.length})</h1>
        <Link to="/cart" className="mt-2 text-center text-md font-Inconsolata font-semibold underline cursor-pointer hover:text-black">Edit bag</Link>
        <div className={cart.length > 1 ? "max-h-[12.5rem] overflow-y-scroll" :"max-h-[12.5rem]" }>
            { cart.map( item => (
                <BagItem key={item.random_index} product={item} />
            ))}
        </div>
        <PromoInput position="relative my-2"/>
        <div className="mt-4 flex justify-between font-Inconsolata">
        
            <span className="flex flex-col">
            <h1 className="text-lg font-light max-mobile:text-lg">Subtotal</h1>
            <h1 className="text-xl  font-semibold max-mobile:text-lg">Total To Pay</h1>
            </span>
            <span className="flex flex-col">
            <p className={`text-lg ${discountPrice > 0 ? (`text-red-500`) : (`text-black`)}`}>US${discountPrice ? discountPrice : total}.00</p>
            <p className={`text-xl font-bold max-mobile:text-lg ${discountPrice > 0 ? (`text-red-500`) : (`text-black`)}`}>US${discountPrice ? discountPrice : total}.00</p>
            </span>
        </div>
    </aside>
  )
}
