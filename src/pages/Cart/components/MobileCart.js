import { useDispatch } from "react-redux"
import { removeItemCart,increaseQuantity, decreaseQuantity } from "../../../store/CartSlice"
import { Link } from "react-router-dom"

export const MobileCart = ({product}) => {
    const { id, image, title, size, quantity, price} = product
    const dispatch = useDispatch()

    const handleQuantityIncrease = (product) => {
      dispatch(increaseQuantity(product))
    }
  
    const handleQuantityDecrease = (product) => {
      dispatch(decreaseQuantity(product))
    }
  
  return (
    
    <span className="flex flex-row py-2 mobile:max-tablet:px-2">
        <Link to={`/ALL_Products//${id}`}>
        <img src={image} className="h-32 w-32 mobile:max-tablet:mr-4" alt="" />
        </Link>
        <div className="flex flex-col justify-items-start w-[150px] mobile:max-tablet:w-[350px] ml-2">
        <h1 className="text-md font-Inconsolata font-semibold mobile:max-tablet:text-xl">{title}</h1>
        <span className="flex mt-2">
            <p className="text-sm font-Inconsolata mr-4 mobile:max-tablet:text-lg">Size: {size ? size : "one size"}</p>
            <button onClick={() => {handleQuantityDecrease(product) }}  className=" bg-slate-200 py-2 px-2 rounded-sm text-black text-md">-</button>
            <p className="text-sm font-Inconsolata border border-black py-2 px-2 mobile:max-tablet:text-lg">{quantity}</p>
            <button onClick={() => {handleQuantityIncrease(product) }}  className=" bg-slate-200 py-2 px-2 rounded-sm text-black text-md">+</button>
        </span>
        <p className="text-sm font-Inconsolata font-semibold mobile:max-tablet:text-lg mt-2">${price}.00</p>
        </div>
        {/* Delete Item Button */}
        <svg onClick={() => {dispatch(removeItemCart(product))}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer ml-3 mobile:max-tablet:mr-3" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
         <hr />
    </span>
  )
}
