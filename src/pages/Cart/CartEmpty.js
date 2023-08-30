import { Link } from "react-router-dom"
import empty from "../../assests/empty-cart.png"

export const CartEmpty = () => {
  return (
    
    <aside className="mt-24 flex flex-col  items-center">
        <img src={empty} className="h-12 w-auto" alt="empty" />
        <h1 className="mt-4 text-2xl font-Inconsolata font-medium">YOUR BAG IS EMPTY</h1> 
        <Link to={"/"} className="text-xl font-Inconsolata mt-4 underline underline-offset-1 hover:text-slate-500">
            Continue Shopping
        </Link>
    </aside>
  )
}
