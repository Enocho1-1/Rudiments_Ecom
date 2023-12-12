import { useFilter } from "../../../context/filterContext"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PromoInput } from "../../../components"
import visa from "../../../assests/visa.png"
import mastercard from "../../../assests/mastercard.png"
import americanexpress from "../../../assests/american-express.png"
import paypal from "../../../assests/paypal.png"

export const Checkout = () => {
    const {state} = useFilter()
    const discountPrice = state.discount_price
    const navigate = useNavigate()
    const total = useSelector(state => state.cart.total)
  return (
    <div className="relative max-w-inherit mt-8 py-2 max-mobile:px-4">
        <PromoInput position="absolute top-2 right-2 flex flex-col max-tablet:relative max-tablet:top-0 max-tablet:left-0 "/>
        <aside className="flex">
        <span className="flex flex-col text-xl max-mobile:text-lg">
            <h1 className="font-light">Subtotal</h1>
            <h1 className="font-bold ">Total <p className="max-tablet:hidden font-light inline">(Excl. delivery)</p></h1>
            </span>
            <span className="flex flex-col">
            <p className={`ml-[20rem] max-mobile:ml-[9.375rem] text-lg ${discountPrice > 0 ? (`text-red-500`) : (`text-black`)}`}>US${discountPrice === null ? total : discountPrice}.00</p>
            <p className={`text-xl font-bold ml-[20rem] max-mobile:ml-[9.375rem] max-mobile:text-lg ${discountPrice > 0 ? (`text-red-500`) : (`text-black`)}`}>US${discountPrice === null ? total : discountPrice}.00</p>
            </span>
        </aside>
        <button onClick={() => navigate("/checkout/delivery")} type="button" className="focus:outline-none text-black text-xl font-Bebas bg-yellow-300 px-5 py-2.5 mt-3 max-tablet:w-full">Checkout</button>

        <div className="flex flex-row mt-2">
        {[visa,mastercard,americanexpress,paypal].map((image, index) => (
                <span key={index} className="h-8 w-8 border border-slate-500 rounded-md mx-1">
                    <img src={image} className="h-auto w-auto" alt="" />
                </span>
            ))}
        </div>

    
    </div>
  )
}
