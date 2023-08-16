import { useTitle } from "../hooks"
import { useSelector,useDispatch } from "react-redux"
import { removeItemCart } from "../store/CartSlice"
import { Link } from "react-router-dom"
import visa from "../assests/visa.png"
import mastercard from "../assests/mastercard.png"
import americanexpress from "../assests/american-express.png"
import paypal from "../assests/paypal.png"
import empty from "../assests/empty-cart.png"
import arrow from "../assests/arrow.png"

export const Cart = ({name}) => {
  useTitle(name)
  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()

  return (
    <section>
      {cart.length == 0 ?
        <aside className="mt-24 flex flex-col  items-center">
          <img src={empty} className="h-12 w-auto" alt="empty" />
          <h1 className="mt-4 text-2xl font-Inconsolata font-medium">YOUR BAG IS EMPTY</h1> 
          <Link to={"/"} className="text-xl font-Inconsolata mt-4 underline underline-offset-1">
            Continue Shopping
          </Link>
        </aside>:
        <aside className=" m-auto max-w-7xl mt-24 flex flex-col">
         <Link to={"/"} className="mt-4 px-4 flex">
            <img src={arrow} className="h-6 self-center" alt="" />
            <h1 className="text-xl font-Inconsolata font-semibold mx-2 ">Continue Shopping</h1>
          </Link>
          <div className="mt-12 self-center">
            <h1 className="text-4xl font-Inconsolata font-semibold text-center">MY SHOPPING BAG</h1>
            
            {/* Cart Items */}
            <div className="mt-8">
              {
              
                cart.map( item => (
                  <>
                    <span className="grid grid-cols-6 mt-2 p-4">
                      <Link to={`/${item.id}`}>
                         <img src={item.image} className="h-24 w-24" alt="product image" />
                      </Link>
       
                      <div className="whitespace-normal w-auto mx-4">
                        <h1 className="text-2xl font-Inconsolata">{item.title}</h1>
                      </div>
                      <div className="mx-4 relative flex justify-center w-auto">
                        <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Size</h1>
                        <p className="text-2xl font-Inconsolata self-center">{item.size}</p>
                      </div>
                      <div className="mx-4 relative flex justify-center w-auto">
                        <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Quantity</h1>
                        <p className="text-2xl font-Inconsolata self-center">{item.quantity}</p>
                      </div>
                      <div className="mx-4 relative flex justify-center w-auto">
                        <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Price</h1>
                        <p className="text-2xl font-Inconsolata self-center">${item.price}.00</p>
                      </div>
                      {/* Delete Item Button */}
                      <svg onClick={() => {dispatch(removeItemCart(item))}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer self-center" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                      </svg>
                    </span> 
                    <hr />
                  </>
                 
                ))
              }
              {/* Subtotal & Total */}
              <div className="mt-8">
                <aside>
                  <span className="grid grid-cols-2">
                      <h1 className="text-2xl font-Inconsolata font-light mx-4">Subtotal</h1>
                      <p className="text-xl">${total}.00</p>
                    </span>
                    <span className="grid grid-cols-2">
                      <h1 className="text-2xl font-Inconsolata font-bold mx-4">Total (Excl. delivery)</h1>
                      <p className="text-xl font-bold">${total}.00</p>
                    </span>
                </aside>
                <button type="button" className="focus:outline-none text-black text-xl font-Bebas bg-yellow-300 px-5 py-2.5 mx-4 mt-3">Checkout</button>

                {/* Acceptable Payment Options */}
                <div className="flex flex-row mx-4 mt-2">
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
