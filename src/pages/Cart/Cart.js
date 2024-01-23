/* eslint-disable */
import { useTitle,useMatchMedia,useSubTotal } from "../../hooks"
import { useFilter } from "../../context/filterContext"
import { Link } from "react-router-dom"
import { MobileCart,DesktopCart,CartEmpty,Checkout} from "./components"
import {PromoNotification} from "../../components"



export const Cart = ({name}) => {
  useTitle(name)
  const {myQuery} = useMatchMedia(769)
  const {state} = useFilter()
  const promoApplied = state.promoApplied
  const {cart} = useSubTotal()


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
              <Checkout />
            </div>
          </div>
        </aside>
      }
    </section>
  )
}
