/* eslint-disable */
import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import { useDispatch } from "react-redux"
import { useMatchMedia,useIndividualItem,useRecentItems,useDesktopSizes,useMobileSizes  } from "../../hooks"
import { addItemToCart } from "../../store/CartSlice"
import { Loading,SideCart,Accordion } from "../../components"
import {MobileCarousel,TrendingSlider,Slider,Trending} from "./components"
import Logo from "../../assests/cube.png"
import "./ItemDetail.css"


export const ItemDetail = () => {

const [sidecart, setSideCart] = useState(false)
const [selectSize, setSelectSize] = useState("")
const {myQuery} = useMatchMedia(769)

const param = useParams()
const productId = param.id
const {data} = useIndividualItem(productId)
const dispatch = useDispatch()

const mobileView = "flex flex-col"


  // Destructure Returned JSON
const {  id, title , price, category, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data

// Add user recently viewed items hook
const {recents} = useRecentItems(data,id)

// Image array for mobile view carousel
const dataImages = [imageUrl,imageUrl_Two,imageUrl_Three,imageUrl_Four]
  

// Cart Item Object Literal
const userItem = {
  id: data.id,
  random_index:Math.floor(Math.random() * 99000),
  title : data.title,
  price: data.price,
  quantity: 1,
  size: selectSize,
  image: imageUrl
}


  return (
    <section className="relative">
      {data.length === 0 && <Loading/>}
      <aside className={myQuery && myQuery.matches ? mobileView : "flex flex-row"}>
        {myQuery && !myQuery.matches
        ? 
        (
          // Responsive Design range: minimum 769px 
        <>
            {/* Side Cart Reveal */}
            { sidecart && < SideCart setSideCart={setSideCart}/>}
      
            
            {/* Product Images */}
            <div className="grid grid-cols-2 grid-rows-2 px-4 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows tablet:max-laptop:w-[60%] laptop:max-desktop:w-[70%] desktop:w-[75%]  individualImg">
              <img src={imageUrl} className=" w-full " alt="..."/>
              <img src={imageUrl_Two} className="w-full " alt="..."/>
              <img src={imageUrl_Three} className=" w-full " alt="..."/>
              {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
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
              <button type="button" onClick={() => {dispatch(addItemToCart(userItem)); setSideCart(true)}} className=" cart flex flew-row justify-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-8 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
            </div> 
        </>
 
        ): 
       
        (
           // Responsive Design range:0px - 769px
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
                  <button type="button" onClick={() => {dispatch(addItemToCart(userItem )); setSideCart(true)}} className=" cart flex justify-center self-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-2 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
              </aside>
            </div>
          </>
          
      ) 
     
      }
      </aside>

      <aside className="h-fit flex flex-col my-12">
        {/* Trending Array */}
        <TrendingSlider  array={Trending}/>

        {/* Recently Viewed */}
        <Slider array={recents}/>
     
      </aside>
    </section>
  )
}
