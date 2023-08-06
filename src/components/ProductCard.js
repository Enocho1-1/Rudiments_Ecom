import { useState } from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export const ProductCard = ({product}) => {
    const [hover, setHover] = useState(false)
    const { id, title, price, imageUrl, imageUrl_Two} = product

    const imageOne = imageUrl
    const imageTwo = imageUrl_Two

  return (
    
    <div className=" bg-white  rounded-lg individualCard">
        <Link to={`/${id}`} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            { hover ? (<img className="w-fit" src={imageOne} alt="" />): (<img className="w-fit" src={imageTwo} alt="" />)}
        </Link>
        <div className="p-2">
            <Link  to={`/${id}`}  >
                <h5 className="mb-2 text-2xl font-Inconsolata tracking-tight text-black">{title}</h5>
            </Link>
            <p className="mb-3 font-semibold text-black">{price}</p>
        </div>
    </div>

  )
}
