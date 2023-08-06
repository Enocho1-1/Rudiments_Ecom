import { useState } from "react"
import { Link } from "react-router-dom"

export const ProductCard = ({product}) => {
    const [hover, setHover] = useState(false)
    const { title, price, imageUrl, imageUrl_Two} = product

    const imageOne = imageUrl
    const imageTwo = imageUrl_Two

    const changeImage = () => {
      setHover(false)
    }
  return (
    
    <div className="w-[400px] bg-white  rounded-lg ">
        <Link to="#" 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            { hover ? (<img className=" h-96 w-fit" src={imageOne} alt="" />): (<img className=" h-96 w-fit" src={imageTwo} alt="" />)}
        </Link>
        <div className="p-2">
            <Link to="#">
                <h5 className="mb-2 text-2xl font-Bebas tracking-tight text-black">{title}</h5>
            </Link>
            <p className="mb-3 font-bold text-black">{price}</p>
        </div>
    </div>

  )
}
