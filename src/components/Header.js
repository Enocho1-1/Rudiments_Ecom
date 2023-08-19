import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../assests/cube.png"


export const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  const cart = useSelector(state => state.cart.cartItems)
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    const userSeach = e.target.item.value
    e.target.reset()
    navigate(`search?item=${userSeach}`)
  }

  return (
    
  <nav className="bg-white border-gray-200 top-0 fixed z-20 w-screen">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Rudiments Logo" />
            <span className="self-center text-3xl leading-loose font-semibold whitespace-nowrap text-blk font-Bebas ">RUDIMENTS</span>
        </Link>
      <div className="flex md:order-2">
        <button onClick={() => setIsHidden(!isHidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500  hover:bg-gray-300 rounded-lg text-sm p-2.5 mr-1" >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor"  strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <div className="relative hidden md:block">
          <form onSubmit={handleSubmit}>
            <input type="text" name="item" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-slate-500" placeholder="Search Clothing Piece..."/>
          </form>
        </div>
        <button data-collapse-toggle="navbar-search" onClick={() => setIsHidden(!isHidden)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor"  strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
        <div className={isHidden ? "items-center justify-between  w-full md:flex md:w-auto md:order-1" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1" } id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <input type="text" name="userSearch" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Clothing Piece..."/>
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium font-Bebas bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
                <NavLink to="/shop" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">Shop</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">About</NavLink>
            </li>
            <li>
                <NavLink to="/cart" className="block py-2 pl-3 pr-4 text-xl font-Bebas text-blk rounded hover:bg-gray-100">Cart ( {cart.length} )</NavLink>
            </li>
          </ul>
        </div>
      </div>
</nav>

  )
}
