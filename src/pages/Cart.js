import { useTitle } from "../hooks"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import empty from "../assests/empty-cart.png"
import arrow from "../assests/arrow.png"

export const Cart = ({title}) => {
  useTitle(title)
  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)

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
            <img src={arrow} className="h-6" alt="" />
            <h1 className="text-xl font-Inconsolata font-light mx-2 ">Continue Shopping</h1>
          </Link>
          <div className="mt-12 self-center">
            <h1 className="text-4xl font-Inconsolata font-semibold">MY SHOPPING BAG</h1>
          </div>
        </aside>
      }
    </section>
  )
}
