import {useState} from "react"
import {useDispatch} from "react-redux"
import {useDesktopSizes} from "../../../hooks/useDesktopSizes"
import {SideCart,Accordion} from "../../../components"
import {addItemToCart} from "../../../store/CartSlice"
import Logo from "../../../assests/cube.png"

export const DesktopView = ({data}) => {
    const {One,Two,Three,Four,title,price,category,selectSize,setSelectSize,item} = data
    const [sidecart, setSideCart] = useState(false)
    const dispatch = useDispatch()
  return (
    <>
        {/* Side Cart Reveal */}
        { sidecart && < SideCart setSideCart={setSideCart}/>}

        
        {/* Product Images */}
        <div className="grid grid-cols-2 grid-rows-2 px-4 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows tablet:max-laptop:w-[60%] laptop:max-desktop:w-[70%] desktop:w-[75%]  individualImg">
        <img src={One} className=" w-full " alt="..."/>
        <img src={Two} className="w-full " alt="..."/>
        <img src={Three} className=" w-full " alt="..."/>
        {Four? ( <img src={Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
        </div>

        {/* Product Info */}
        <div className=" flex flex-col min-[1690px]:fixed right-0 tablet:max-laptop:w-[50%] laptop:max-desktop:w-[30%] desktop:w-[25%]">
        <aside className="mt-12 flex flex-col">
            <h1 className=" font-Inconsolata text-xl justify-self-center">{title}</h1>
            <p className="font-normal mt-2 text-xl">${price}.00</p>
        </aside>

        {/* Clothing Piece Sizes */}
        {useDesktopSizes(category,selectSize,setSelectSize)}

        {/* Product Detail */}
        <Accordion/>

        {/* Add To Cart */}
        <button type="button" onClick={() => {dispatch(addItemToCart(item)); setSideCart(true)}} className=" cart flex flew-row justify-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-8 ">Add To Bag<img src={Logo} alt="logo" className="h-6 mx-2"/></button>
        </div> 
    </>
  )
}
