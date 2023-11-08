import { useEffect } from "react"
import { useTitle,useMatchMedia } from "../../hooks"
import { useSelector,useDispatch } from "react-redux"
import { getSubTotal } from "../../store/CartSlice"
import { Link } from "react-router-dom"
import { MobileCart,DesktopCart,CartEmpty} from "./components"
import visa from "../../assests/visa.png"
import mastercard from "../../assests/mastercard.png"
import americanexpress from "../../assests/american-express.png"
import paypal from "../../assests/paypal.png"
import arrow from "../../assests/arrow.png"

export const Cart = ({name}) => {
  useTitle(name)
  const {myQuery} = useMatchMedia(769)

  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getSubTotal())
  },[cart])


  return (
    <section>
      {cart.length === 0 ?
        <CartEmpty />
        :
        <aside className="m-auto max-w-7xl mt-24 flex flex-col">
         <Link to={"/"} className="mt-4 px-4 flex hover:text-slate-500">
            <img src={arrow} className="h-6 self-center" alt="" />
            <h1 className="text-xl font-Inconsolata font-semibold mx-2 ">Continue Shopping</h1>
          </Link>
          <div className="mt-12 self-center">
            <h1 className="text-4xl font-Inconsolata font-semibold text-center">MY SHOPPING BAG</h1>
            
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
              <div className="max-w-inherit mt-8 py-2">
                <aside className="flex">
                  <span className="flex flex-col">
                      <h1 className="text-2xl font-Inconsolata font-light max-mobile:text-lg">Subtotal</h1>
                      <h1 className="text-xl font-Inconsolata font-bold max-mobile:text-lg">Total(Excl. delivery)</h1>
                    </span>
                    <span className="flex flex-col">
                      <p className="ml-[20rem] max-mobile:ml-[9.375rem] text-lg">US${total}.00</p>
                      <p className="text-xl font-bold ml-[20rem] max-mobile:ml-[9.375rem] max-mobile:text-lg">US${total}.00</p>
                    </span>
                </aside>
                <button type="button" className="focus:outline-none text-black text-xl font-Bebas bg-yellow-300 px-5 py-2.5 mt-3 max-tablet:w-full">Checkout</button>

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
