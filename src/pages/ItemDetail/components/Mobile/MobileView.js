import {useState} from "react"
import {useDispatch} from "react-redux"
import {useMobileSizes} from "../../../../hooks/useMobileSizes"
import { MobileCarousel } from "./MobileCarousel"
import {SideCart,Accordion} from "../../../../components"
import {addItemToCart} from "../../../../store/CartSlice"
import Logo from "../../../../assests/cube.png"

export const MobileView = ({data}) => {
  const {imageOne,imageTwo,imageThree,imageFour,title,price,category,selectSize,setSelectSize,item} = data
    // Image array for mobile view carousel
    const dataImages = [imageOne,imageTwo,imageThree,imageFour]
    const [sidecart, setSideCart] = useState(false)
    const dispatch = useDispatch()
  return (
    <> 
    { sidecart && < SideCart setSideCart={setSideCart}/>}
      <MobileCarousel images={dataImages}/>
      <div className="w-full">
        <aside className="flex justify-between p-3 mt-4">
          <h1 className=" font-Bebas text-2xl">{title}</h1>
          <p className="font-semibold text-xl">${price}.00</p>
        </aside>
        <hr />
        <aside className="flex flex-col">
            {/* Clothing Piece Sizes */}
            { useMobileSizes(category,selectSize,setSelectSize) }
            {/* Product Detail */}
            <Accordion/>
            {/* Add To Cart */}
            <button type="button" onClick={() => {dispatch(addItemToCart(item)); setSideCart(true)}} className=" cart flex justify-center self-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-2 ">Add To Bag<img src={Logo} alt="logo" className="h-6 mx-2"/></button>
        </aside>
      </div>
    </>
  )
}
