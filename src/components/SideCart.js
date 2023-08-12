import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const SideCart = ({setSideCart}) => {
  const cart = useSelector( state => state.cart.cartItems)
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 w-screen flex justify-end z-40" id="modalOverlay">
        <div className="absolute top-0 bg-white h-full laptop:w-[35%]">
            <header className="mt-6 px-4 flex flex-row justify-between">
                <h1 className="text-2xl font-Bebas">Cart</h1>
                <svg onClick={() => {setSideCart(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </header>

            {/* Cart Items */}
            <aside className=" mt-4 px-4 h-[400px] overflow-y-scroll">
              <div className="flex flex-col justify-evenly p-2">
                { cart.map( item => (
                  <span className=" mt-4 flex flex-row">
                    <Link to={`/${item.id}`}>
                      <img src={item.image} className="h-[150px] w-[150px]" alt="" />
                    </Link>
                    <aside className="flex flex-col mx-2">
                      <h1 className="text-xl font-Inconsolata">{item.title}</h1>
                      <p className="text-md font-semibold font-Inconsolata">{item.price}</p>
                      <p className="text-md font-Inconsolata">{item.size}</p>
                      <span className="mt-6 text-md font-Inconsolata">Qty:{item.quantity}</span>
                    </aside>
                  </span>
                ))}
              </div>
            </aside>
        </div>
    </section>
  )
}
