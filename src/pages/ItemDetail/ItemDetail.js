/* eslint-disable */
import {useState } from "react"
import {useParams} from "react-router-dom"
import { useDispatch } from "react-redux"
import { useMatchMedia,useIndividualItem,useRecentItems,useDesktopSizes,useMobileSizes} from "../../hooks"
import { addItemToCart } from "../../store/CartSlice"
import { Loading,SideCart,Accordion } from "../../components"
import {DesktopView,MobileCarousel,TrendingSlider,Slider,Trending} from "./components"
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

  const DesktopData = {
    One:imageUrl,
    Two:imageUrl_Two,
    Three:imageUrl_Three,
    Four:imageUrl_Four,
    title:title,
    price:price,
    category:category,
    selectSize:selectSize,
    setSelectSize:setSelectSize,
    item: userItem
  }

  return (
    <section className="relative">
      {data.length === 0 && <Loading/>}
      <aside className={myQuery && myQuery.matches ? mobileView : "flex flex-row"}>
        {myQuery && !myQuery.matches
        ? 
        (<DesktopView data={DesktopData}/> ): 
       
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
