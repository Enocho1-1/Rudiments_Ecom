import { useFilter } from "../../context/filterContext"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"
import { BagItem } from "./components/BagItem"

export const Delivery = () => {
    const { retrieveUserInfo } = useFilter()
    const { firstName,lastName,title } = retrieveUserInfo()
    const cart = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)

  return (
    <section>
        <div className="mt-[4.688rem] flex justify-center">
            {/* User Delivery Address */}
            <aside className="min-w-[31.25rem] max-tablet:min-w-[25rem] flex flex-col p-4 border border-gray-200">
                <h1 className="m-auto mb-4 text-2xl font-Inconsolata font-light">Please confirm your address</h1>
                <span className="border border-gray-200 rounded-sm p-4">
                    <p className="my-2 text-lg font-Inconsolata">{title}. {firstName} {lastName}</p>
                    <p className="my-2 text-lg font-Inconsolata">929 W. Creekside Road</p>
                    <p className="my-2 text-lg font-Inconsolata">Campbell, CA</p>
                    <p className="my-2 text-lg font-Inconsolata"> 95008</p>
                    <p className="my-2 text-lg font-Inconsolata"> US</p>
                    <p className="my-2 text-lg font-Inconsolata"> Tel: (689) 472-2872</p>
                </span>
                <button className="m-auto min-w-[200px]  bg-blk p-2  text-xl text-white font-Bebas mt-4">NEXT STEP</button>
            </aside>

            <aside className="h-fit min-w-[21.875rem] ml-4 p-4 bg-slate-200 flex flex-col max-[900px]:hidden">
                <h1 className="text-center text-2xl font-Inconsolata font-semibold">My bag ({cart.length})</h1>
                <Link to="/cart" className="mt-2 text-center text-md font-Inconsolata font-semibold underline cursor-pointer hover:text-black">Edit bag</Link>
                <div className="max-h-[200px] overflow-y-scroll">
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
        </div>
      
    </section>
  )
}
