import { useDispatch } from "react-redux"
import { useState } from "react"
import { removeItemCart } from "../store/CartSlice"
import { Link } from "react-router-dom"

export const CartItem = ({product}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] =useState(1)
  return (
      <span key={product.id}  className=" mt-4 flex flex-row" >
        <Link to={`/${product.id}`}>
          <img src={product.image} className="h-max w-[150px] max-mobile:h-[150px]" alt="" />
        </Link>
        <aside className="flex flex-col mx-2">
          <h1 className="text-xl font-Inconsolata">{product.title}</h1>
          <p className="text-md font-semibold font-Inconsolata">${product.price}.00</p>
          <p className="text-md font-Inconsolata">{product.size}</p>
          <span className="mt-6 text-md font-Inconsolata">Qty:{quantity}</span>
          <span onClick={() =>  dispatch(removeItemCart(product))} className="text-sm hover:underline-offset-auto hover:cursor-pointer">REMOVE</span>
        </aside>
      </span>
  )
}
