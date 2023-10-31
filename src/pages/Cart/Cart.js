import { useTitle } from "../../hooks"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MobileCart,DesktopCart,CartEmpty} from "./components"
import visa from "../../assests/visa.png"
import mastercard from "../../assests/mastercard.png"
import americanexpress from "../../assests/american-express.png"
import paypal from "../../assests/paypal.png"
import arrow from "../../assests/arrow.png"

export const Cart = ({name}) => {
  useTitle(name)
  const [myQuery, setMyQuery] = useState({
    matches: window.innerWidth < 769 ? true : false
  })

  //  Window MatchMedia
 useEffect(() => {
  let mediaQuery = window.matchMedia("(max-width: 769px)")
  mediaQuery.addEventListener("change", setMyQuery)

 },[])

  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)


  return (
    <section>
      {cart.length === 0 ?
        <CartEmpty />
        :
        <aside className=" m-auto max-w-7xl mt-24 flex flex-col">
         <Link to={"/"} className="mt-4 px-4 flex">
            <img src={arrow} className="h-6 self-center" alt="" />
            <h1 className="text-xl font-Inconsolata font-semibold mx-2 hover:text-slate-500">Continue Shopping</h1>
          </Link>
          <div className="mt-12 self-center">
            <h1 className="text-4xl font-Inconsolata font-semibold text-center">MY SHOPPING BAG</h1>
            
            {/* Cart Items */}
            <div className="mt-8">
              
              {myQuery && myQuery.matches ?
                // Mobile Max Tablet View
                (
                <>
                  {cart.map( (item, index) => (
                    <MobileCart  key={index} product={item} /> 
                  ))}
                </>
                ) :
                (
                  <>
                  
                    {
                    cart.map( (item, index) => (
                      <DesktopCart key={index} product={item} /> 
                    ))
                  }
                  </>
                )
              }
              
              {/* Subtotal & Total */}
              <div className="mt-8 pl-4">
                <aside>
                  <span className="grid grid-cols-2 max-tablet:flex mobile:max-tablet:flex max-mobile:justify-between mobile:max-tablet:justify-between max-mobile:mx-2">
                      <h1 className="text-2xl font-Inconsolata font-light max-mobile:text-lg">Subtotal</h1>
                      <p className="text-xl max-mobile:text-lg">${total}.00</p>
                    </span>
                    <span className="grid grid-cols-2 max-mobile:flex mobile:max-tablet:flex max-mobile:justify-between mobile:max-tablet:justify-between max-mobile:mx-2">
                      <h1 className="text-2xl font-Inconsolata font-bold max-mobile:text-lg">Total</h1>
                      <p className="text-xl font-bold max-mobile:text-lg">${total}.00</p>
                    </span>
                </aside>
                <button type="button" className="focus:outline-none text-black text-xl font-Bebas bg-yellow-300 px-5 py-2.5 mt-3 max-mobile:w-full mobile:max-tablet:w-full">Checkout</button>

                {/* Acceptable Payment Options */}
                <div className="flex flex-row mt-2">
                  <span className="h-8 w-8 border border-slate-500 rounded-md mx-1">
                    <img src={visa} className="h-auto w-auto" alt="" />
                  </span>
                  <span className="h-8 w-8 border border-slate-500 rounded-md  mx-1">
                    <img src={mastercard} className="h-auto w-auto" alt="" />
                  </span>
                  <span className="h-8 w-8 border border-slate-500 rounded-md  mx-1">
                    <img src={americanexpress} className="h-auto w-auto" alt="" />
                  </span>
                  <span className="h-8 w-8 border border-slate-500 rounded-md  mx-1">
                    <img src={paypal} className="h-auto w-auto" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      }
    </section>
  )
}
