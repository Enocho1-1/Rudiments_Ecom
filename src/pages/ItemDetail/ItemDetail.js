/* eslint-disable */
import {useState } from "react"
import {useParams} from "react-router-dom"
import { useMatchMedia,useIndividualItem,useRecentItems} from "../../hooks"
import { Loading} from "../../components"
import {DesktopView,MobileView,TrendingSlider,Slider,Trending} from "./components"
import "./ItemDetail.css"


export const ItemDetail = () => {

const [selectSize, setSelectSize] = useState("")
const {myQuery} = useMatchMedia(769)

const param = useParams()
const productId = param.id
const {data} = useIndividualItem(productId)

const mobileView = "flex flex-col"


  // Destructure Returned JSON
const {  id, title , price, category, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data

// Add user recently viewed items hook
const {recents} = useRecentItems(data,id)


  

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

  const MobileData = {
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
        {myQuery && !myQuery.matches ? (<DesktopView data={DesktopData}/> ):  (<MobileView data={MobileData}/>)}
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
