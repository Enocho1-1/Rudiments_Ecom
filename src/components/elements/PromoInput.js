import { useState } from "react"
import { useFilter } from "../../context/filterContext"
import { useSelector} from "react-redux"
import { discountUserTotal } from "../../utility"

export const PromoInput = () => {
    const [promo,setPromo] = useState(true)
    const [promoError, setPromoError] = useState(false)
    const {retrieveUserInfo,discountPriceStore,state,dispatch} = useFilter()
    const {promoCode} = retrieveUserInfo()

    // const promoApplied =  state.promoApplied
    const total = useSelector(state => state.cart.total)

    const handlePromo = (e) => {
        e.preventDefault()
        const userPromo = e.target.promo.value
        // Discount Cart Total
        discountUserTotal(total,userPromo,promoCode,dispatch , setPromoError, discountPriceStore)
        e.target.reset()
      }
    
  return (
    <aside className="absolute top-2 right-2 flex flex-col max-tablet:relative max-tablet:top-0 max-tablet:left-0 ">
        {promo ? ( <span onClick={() => setPromo(false)} className=" mt-2 text-md  font-semibold underline cursor-pointer hover:text-black">Have a promo code?</span>): (<span className="max-tablet:my-2"><p>Please enter your promo code</p><form onSubmit={(e) => handlePromo(e)} ><input className="py-2 px-4" type="text" name="promo" /><button type="submit" className="bg-gray-200 font-semibold text-md text-black py-2.5 px-4">Apply</button></form>{promoError && <p className="text-xs text-red-500">Sorry, the promo code you entered is not valid</p>}</span>)}
    </aside>
  )
}
