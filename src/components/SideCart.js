import { useSelector,useDispatch } from "react-redux"
import {  removeItemCart } from "../store/CartSlice"
import { Link } from "react-router-dom"

export const SideCart = ({setSideCart}) => {

  const dispatch = useDispatch()
  const cart = useSelector( state => state.cart.cartItems )
  const total = useSelector( state => state.cart.total)

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 w-screen flex justify-end z-40" id="modalOverlay">
      {/* Side Cart */}
        <div className="absolute flex flex-col top-0 bg-white h-full mobile:max-tablet:w-[100%] tablet:max-laptop:w-[35%] laptop:w-[25%]">
            <header className="mt-6 px-4 flex flex-row justify-between">
                <h1 className="text-2xl font-Bebas">Cart</h1>
                <svg onClick={() => {setSideCart(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </header>

            {/* Cart Items */}
            <aside className=" mt-2 px-4  h-[300px] laptop:h-[400px] overflow-y-scroll">
                <h1 className="text-xl font-semibold font-Inconsolata text-center block">ADDED ITEM<span>({cart.length})</span></h1>
             
              <div className="flex flex-col justify-evenly p-2">
                { cart.map( item => (
                  <span className=" mt-4 flex flex-row">
                    <Link to={`/${item.id}`}>
                      <img src={item.image} className="h-max w-[150px]" alt="" />
                    </Link>
                    <aside className="flex flex-col mx-2">
                      <h1 className="text-xl font-Inconsolata">{item.title}</h1>
                      <p className="text-md font-semibold font-Inconsolata">${item.price}.00</p>
                      <p className="text-md font-Inconsolata">{item.size}</p>
                      <span className="mt-6 text-md font-Inconsolata">Qty:{item.quantity}</span>
                      <span onClick={() =>  dispatch(removeItemCart(item))} className="text-sm hover:underline-offset-auto hover:cursor-pointer">REMOVE</span>
                    </aside>
                  </span>
                ))}
              </div>
            </aside>
            {/*  Total */}
            <aside className="mt-2 px-8 flex flex-row justify-between">
              <p className="font-Bebas text-xl">Total (Excl. delivery)</p>
              <p>${total}.00</p>
            </aside>
            <Link to={`/cart`} className=" text-xl font-Bebas text-center mt-4 mx-4 border-1 border-black p-2">
             View Bag
            </Link>
       
        </div>
    </section>
  )
}
