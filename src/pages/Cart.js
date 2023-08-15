import { useTitle } from "../hooks"
import { useSelector,useDispatch } from "react-redux"
import { removeItemCart } from "../store/CartSlice"
import { Link } from "react-router-dom"
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
                  <span className="flex flex-row mt-2 py-4">
                    <img src={item.image} className="h-24 w-24" alt="product image" />
                    <div className="whitespace-normal w-[250px] mx-4">
                      <h1 className="text-2xl font-Inconsolata">{item.title}</h1>
                    </div>
                    <div className="mx-4 relative flex justify-center w-[150px]">
                      <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Size</h1>
                      <p className="text-2xl font-Inconsolata self-center">{item.size}</p>
                    </div>
                    <div className="mx-4 relative flex justify-center w-[150px]">
                      <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Quantity</h1>
                      <p className="text-2xl font-Inconsolata self-center">{item.quantity}</p>
                    </div>
                    <div className="mx-4 relative flex justify-center w-[150px]">
                      <h1 className="text-2xl text-center font-Inconsolata absolute top-0">Price</h1>
                      <p className="text-2xl font-Inconsolata self-center">${item.price}.00</p>
                    </div>
                    {/* Delete Item Button */}
                    <svg onClick={() => {dispatch(removeItemCart(item))}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer self-center" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </span> 
                ))
              }
              <hr />
            </div>
          </div>
        </aside>
      }
    </section>
  )
}
