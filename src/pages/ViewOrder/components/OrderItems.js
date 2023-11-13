
export const OrderItems = ({product}) => {
    const { image, title, size, quantity, price} = product
  return (
    <span className="font-Inconsolata  flex flex-row py-2 max-tablet:px-2">
        <img src={image} className="h-32 w-24 mobile:max-tablet:mr-4" alt="" />
        <div className="flex flex-col justify-items-start ml-2">
        <h1 className="text-xl font-semibold ">{title}</h1>
        <span className="flex mt-2">
            <p className="text-md mr-4 mobile:max-tablet:text-lg">Size:{size ? size : "one size"}</p>
            <p className="text-md px-2 mobile:max-tablet:text-lg">Qty. {quantity}</p>
        </span>
        <p className="text-md mobile:max-tablet:text-lg mt-2">${price}.00</p>
        </div>
    </span>
  )
}
