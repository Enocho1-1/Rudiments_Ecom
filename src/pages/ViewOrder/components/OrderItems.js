import {  Link  } from "react-router-dom"

export const OrderItems = ({product}) => {
    const { id,image, title, size, quantity, price} = product
  return (
    <span className="font-Inconsolata  flex flex-row py-2 max-tablet:px-2">
        <Link to={`/ALL_Products/${id}`}>
          <img src={image} className="h-32 w-24 mobile:max-tablet:mr-4" alt="" />
        </Link>
        <div className="flex flex-col justify-items-start ml-2">
          <Link to={`/ALL_Products/${id}`} className="hover:text-inherit">
            <h1 className="text-xl font-semibold ">{title}</h1>
          </Link>
          <span className="flex mt-2">
              <p className="text-md mr-4 mobile:max-tablet:text-lg">Size:{size ? size : "one size"}</p>
              <p className="text-md px-2 mobile:max-tablet:text-lg">Qty. {quantity}</p>
          </span>
          <p className="text-md mobile:max-tablet:text-lg mt-2">${price}.00</p>
        </div>
    </span>
  )
}
