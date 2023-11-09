import { useSelector } from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"
import { BagItem } from "./BagItem"

export const MyBag = () => {
    
    const cart = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)
  return (
    <aside className="h-fit min-w-[21.875rem] ml-4 p-4 bg-slate-200 flex flex-col max-[900px]:hidden">
        <h1 className="text-center text-2xl font-Inconsolata font-semibold">My bag ({cart.length})</h1>
        <Link to="/cart" className="mt-2 text-center text-md font-Inconsolata font-semibold underline cursor-pointer hover:text-black">Edit bag</Link>
        <div className={cart.length > 1 ? "max-h-[12.5rem] overflow-y-scroll" :"max-h-[12.5rem]" }>
            { cart.map( item => (
                <BagItem key={item.random_index} product={item} />
            ))}
        </div>
        <div className="mt-4 flex justify-between font-Inconsolata">
            <span className="flex flex-col">
            <h1 className="text-lg font-light max-mobile:text-lg">Subtotal</h1>
            <h1 className="text-xl  font-semibold max-mobile:text-lg">Total To Pay</h1>
            </span>
            <span className="flex flex-col">
            <p className=" text-lg">US${total}.00</p>
            <p className="text-xl font-bold max-mobile:text-lg">US${total}.00</p>
            </span>
        </div>
    </aside>
  )
}
