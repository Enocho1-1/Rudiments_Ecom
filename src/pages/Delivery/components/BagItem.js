

export const BagItem = ({product}) => {
    const { image, title, size, quantity, price} = product
  return (
    <span className="flex flex-row py-2 max-tablet:px-2">
        <img src={image} className="h-32 w-24 mobile:max-tablet:mr-4" alt="" />
        <div className="flex flex-col justify-items-start w-[150px] mobile:max-tablet:w-[350px] ml-2">
        <h1 className="text-md font-Inconsolata font-semibold mobile:max-tablet:text-xl">{title}</h1>
        <span className="flex mt-2">
            <p className="text-sm font-Inconsolata mr-4 mobile:max-tablet:text-lg">Size: <strong>{size ? size : "one size"}</strong></p>
            <p className="text-sm font-Inconsolata px-2 mobile:max-tablet:text-lg">Qty. <strong>{quantity}</strong> </p>
        </span>
        <p className="text-sm font-Inconsolata font-semibold mobile:max-tablet:text-lg mt-2">${price}.00</p>
        </div>
    </span>
  )
}
