/* eslint-disable */
import { useEffect,useState } from "react"
import { useTitle,useMatchMedia } from "../../hooks"
import { useSelector,useDispatch } from "react-redux"
import { useFilter } from "../../context/filterContext"
import { useNavigate } from "react-router-dom"
import { getSubTotal } from "../../store/CartSlice"
import { Link } from "react-router-dom"
import { MobileCart,DesktopCart,CartEmpty} from "./components"
import visa from "../../assests/visa.png"
import mastercard from "../../assests/mastercard.png"
import americanexpress from "../../assests/american-express.png"
import paypal from "../../assests/paypal.png"


export const Cart = ({name}) => {
  useTitle(name)
  const {myQuery} = useMatchMedia(769)
  const {retrieveUserInfo,discountPriceStore} = useFilter()
  const {promoCode} = retrieveUserInfo()
  const [promo,setPromo] = useState(true)
  const [promoApplied,setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState(false)
  const [discountPrice,setDiscountPrice] = useState(0)
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()

  const handlePromo = (e) => {
    e.preventDefault()
    const userPromo = e.target.promo.value
    if(userPromo === promoCode){
      const newPrice = Math.floor(total - (total * 0.20) )
       setDiscountPrice(newPrice)
       discountPriceStore(newPrice)
       setPromoApplied(true)
       setTimeout(() => setPromoApplied(false) , 3000)
    }else{
      setPromoError(true)
      setTimeout(() => {setPromoError(false)}, 4000)
    }
    e.target.reset()

    
  }

  


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
               {promoApplied && (<div className="absolute top-[20%] right-4 max-mobile:relative max-mobile:top-5 max-mobile:left-[23%] py-2 px-2 flex rounded-md border-2 border-green-400 text-green-400 max-w-[15.625rem]"><span className="text-4xl bi bi-check2-circle"></span><p className="ml-2 text-md font-semibold self-center">20% Promo Applied ‼️</p></div>)}
            
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
                <aside className="absolute top-2 right-2 flex flex-col max-tablet:relative max-tablet:top-0 max-tablet:left-0 ">
                  {promo ? ( <span onClick={() => setPromo(false)} className=" mt-2 text-md  font-semibold underline cursor-pointer hover:text-black">Have a promo code?</span>): (<span className="max-tablet:my-2"><p>Please enter your promo code</p><form onSubmit={(e) => handlePromo(e)}><input className="py-2 px-4" type="text" name="promo" /><button type="submit" className="bg-gray-200 font-semibold text-md text-black py-2.5 px-4">Apply</button></form>{promoError && <p className="text-xs text-red-500">Sorry, the promo code you entered is not valid</p>}</span>)}
                </aside>
           
                <aside className="flex">
                  <span className="flex flex-col text-xl max-mobile:text-lg">
                      <h1 className="font-light">Subtotal</h1>
                      <h1 className="font-bold ">Total <p className="max-tablet:hidden font-light inline">(Excl. delivery)</p></h1>
                    </span>
                    <span className="flex flex-col">
                      <p className="ml-[20rem] max-mobile:ml-[9.375rem] text-lg">US${discountPrice === 0 ? total : discountPrice}.00</p>
                      <p className="text-xl font-bold ml-[20rem] max-mobile:ml-[9.375rem] max-mobile:text-lg">US${discountPrice === 0 ? total : discountPrice}.00</p>
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
