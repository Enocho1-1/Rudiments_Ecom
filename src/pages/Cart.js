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
      {cart.length === 0 ?
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
              
              {window.innerWidth < 769 ?
                // Mobile Max Tablet View
                (
                <>
                  {cart.map( item => (
                    <span className="flex flex-row py-2 mobile:max-tablet:px-2">
                          <Link to={`/${item.id}`}>
                             <img src={item.image} className="h-32 w-32 mobile:max-tablet:mr-4" alt="" />
                          </Link>
                          <div className="flex flex-col justify-items-start w-[150px] mobile:max-tablet:w-[350px] ml-2">
                            <h1 className="text-md font-Inconsolata font-semibold mobile:max-tablet:text-xl">{item.title}</h1>
                            <span className="flex mt-2">
                              <p className="text-sm font-Inconsolata mr-4 mobile:max-tablet:text-lg">Size: {item.size ? item.size : "n/a"}</p>
                              <p className="text-sm font-Inconsolata mobile:max-tablet:text-lg">Qty: {item.quantity}</p>
                            </span>
                            <p className="text-sm font-Inconsolata font-semibold mobile:max-tablet:text-lg mt-2">${item.price}.00</p>
                          </div>
                          {/* Delete Item Button */}
                          <svg onClick={() => {dispatch(removeItemCart(item))}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer ml-3 mobile:max-tablet:mr-3" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                          </svg>
                        <hr />
                    </span>
                  ))}
                </>
                ) :
                (
                  <>
                  
                    {
                    cart.map( item => (
                      <>
                    
                        <span className="grid place-items-center grid-cols-6 mt-2 p-4">
                          <Link to={`/${item.id}`}>
                             <img src={item.image} className="h-24 w-24" alt="" />
                          </Link>
           
                          <div className="whitespace-normal w-auto mx-4">
                            <h1 className="text-2xl font-Inconsolata">{item.title}</h1>
                          </div>
                          <div className="mx-4 flex flex-col items-center w-auto">
                            <h1 className="text-2xl text-center font-Inconsolata mb-2">Size</h1>
                            <p className="text-2xl font-Inconsolata self-center">{item.size ? item.size : "n/a"}</p>
                          </div>
                          <div className="mx-4 flex flex-col w-auto">
                            <h1 className="text-2xl text-center font-Inconsolata  mb-2">Quantity</h1>
                            <p className="text-2xl font-Inconsolata self-center">{item.quantity}</p>
                          </div>
                          <div className="mx-4 flex flex-col w-auto">
                            <h1 className="text-2xl text-center font-Inconsolata  mb-2">Price</h1>
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
