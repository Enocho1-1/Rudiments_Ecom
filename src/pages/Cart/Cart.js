/* eslint-disable */
import { useEffect } from "react"
import { useTitle,useMatchMedia } from "../../hooks"
import { useSelector,useDispatch } from "react-redux"
import { useFilter } from "../../context/filterContext"
import { useNavigate } from "react-router-dom"
import { getSubTotal } from "../../store/CartSlice"
import { Link } from "react-router-dom"
import { MobileCart,DesktopCart,CartEmpty} from "./components"
import {PromoNotification, PromoInput} from "../../components"
import visa from "../../assests/visa.png"
import mastercard from "../../assests/mastercard.png"
import americanexpress from "../../assests/american-express.png"
import paypal from "../../assests/paypal.png"


export const Cart = ({name}) => {
  useTitle(name)
  const {myQuery} = useMatchMedia(769)
  const {state} = useFilter()
  const discountPrice = state.discount_price
  const promoApplied = state.promoApplied
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(getSubTotal())
  },[cart])


  return (
    <section className="font-Inconsolata">
      {cart.length === 0 ?
        <CartEmpty />
        :
        <aside className="relative m-auto max-w-7xl mt-24 flex flex-col">
         <Link to="/" className="mt-4 px-4 flex hover:text-slate-500">
            <span className="text-2xl bi bi-arrow-bar-left"></span>
            <h1 className="text-xl  font-semibold mx-2 ">Continue Shopping</h1>
          </Link>
               {promoApplied && < PromoNotification/>}
            
          <div className="mt-12 self-center">
            <h1 className="text-4xl  font-semibold text-center">MY SHOPPING BAG</h1>
            
            {/* Cart Items */}
            <div className="mt-8">
              
              {myQuery && myQuery.matches ?
                // Mobile Max Tablet View
                (
                <>
                  {cart.map( item => (
                    <MobileCart  key={item.random_index} product={item} /> 
                  ))}
                </>
                ) :
                (
                  <>
                  
                    {
                    cart.map( item => (
                      <DesktopCart key={item.random_index} product={item} /> 
                    ))
                  }
                  </>
                )
              }
              
              {/* Subtotal & Total */}
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

            </div>
          </div>
        </aside>
      }
    </section>
  )
}
