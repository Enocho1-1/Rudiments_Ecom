import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "../assests/cube.png"


export const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Rudiments Logo" />
            <span className="self-center text-3xl leading-loose font-semibold whitespace-nowrap text-blk font-Bebas ">RUDIMENTS</span>
        </Link>
        <button onClick={() => setIsHidden(!isHidden)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={ isHidden ? `w-full md:block md:w-auto` :`hidden w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0   rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink to="/shop" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">Cart ( 2 )</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-blk flex justify-center items-center h-8">
        <p className="text-xl font-Bebas font-medium text-gray-200">Free Delivery on orders over $100</p>
      </div>
    </nav>

  )
}
