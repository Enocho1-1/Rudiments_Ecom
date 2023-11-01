import { useDispatch } from "react-redux"
import { removeItemCart } from "../../../store/CartSlice"
import { Link } from "react-router-dom"

export const DesktopCart = ({product}) => {
    const { id, image, title, size, quantity, price} = product
    const dispatch = useDispatch()
  return (
    <>
        <span  className="grid place-items-center grid-cols-gridColsSix mt-2 p-4">
            <Link to={`/ALL_Products/${id}`}>
                <img src={image} className="h-24 w-24" alt="" />
            </Link>

            <div className="whitespace-normal w-auto mx-4">
              <h1 className=" text-2xl font-Inconsolata font-semibold">{title}</h1>
            </div>
            <div className="mx-4 flex flex-col items-center w-auto">
            <h1 className="text-2xl text-center font-Inconsolata mb-2">Size</h1>
              <p className="text-2xl font-Inconsolata self-center">{size ? size : "n/a"}</p>
            </div>
            <div className="mx-4 flex flex-col w-auto">
              <h1 className="text-2xl text-center font-Inconsolata  mb-2">Quantity</h1>
              <p className="text-2xl font-Inconsolata self-center">{quantity}</p>
            </div>
            <div className="mx-4 flex flex-col w-auto">
              <h1 className="text-2xl text-center font-Inconsolata  mb-2">Price</h1>
              <p className="text-2xl font-Inconsolata self-center">${price}.00</p>
            </div>
            {/* Delete Item Button */}
              <svg onClick={() => {dispatch(removeItemCart(product))}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg hover:cursor-pointer self-center" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </span> 
        <hr />
    </>

  )
}
