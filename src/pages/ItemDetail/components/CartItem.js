import { useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity,removeItemCart} from "../../../store/CartSlice"
import { Link } from "react-router-dom"

export const CartItem = ({product}) => {

  const { id, image, title, price, size, quantity} = product
  const dispatch = useDispatch()

  const handleQuantityIncrease = (product) => {
    dispatch(increaseQuantity(product))
  }

  const handleQuantityDecrease = (product) => {
    dispatch(decreaseQuantity(product))
  }

  const handleRemoveCart = (product) => {
    dispatch(removeItemCart(product))
  }
  
  
  return (
      <span  className=" mt-4 flex flex-row border border-b-gray-950" >
        <Link to={`/ALL_Products/${id}`}>
          <img src={image} className="h-[200px] w-[175px] max-mobile:h-[150px]" alt="" />
        </Link>
        <aside className="flex flex-col mx-2">
          <h1 className="desktop:max-Lrgmoniter:max-w-[8rem] Lrgmoniter:max-w-[12.5rem] text-lg font-Inconsolata truncate ..." title={title}>{title}</h1>
          <p className="text-md font-semibold font-Inconsolata">${price}.00</p>
          <p className="text-md font-Inconsolata">{size}</p>
          <div className="flex">
            <span className="flex">
              <button onClick={() => {handleQuantityIncrease(product) }} className=" font-Inconsolata text-md flex justify-center items-center self-end text-white bg-black hover:bg-slate-400 p-2"> + </button>
              <span className="mt-6 text-md font-Inconsolata p-2 bg-white border border-b-gray-950">{quantity}</span>
              <button onClick={() => {handleQuantityDecrease(product) }}  className=" font-Inconsolata text-md flex justify-center items-center self-end text-white bg-black hover:bg-slate-400 p-2">  - </button>
            </span>
          </div>
          <span onClick={() => {handleRemoveCart(product)}} className="text-lg font-Inconsolata hover:cursor-pointer">Remove</span>
        </aside>
      </span>
  )
}
