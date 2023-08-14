import { useTitle } from "../hooks"
import { useSelector } from "react-redux"
import empty from "../assests/empty-cart.png"

export const Cart = ({title}) => {
  useTitle(title)
  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.total)

  return (
    <section className="">
      {cart.length == 0 ?
        <aside className="mt-12 flex flex-col justify-center items-center">
          <img src={empty} className="h-12 w-[75px]" alt="empty" />
         <h1>Bag empty</h1> 
        </aside>:
        <aside className="mt-12">
          <h1>Bag occupy</h1>
        </aside>
      }
    </section>
  )
}
