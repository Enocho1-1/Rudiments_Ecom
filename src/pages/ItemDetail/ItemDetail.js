/* eslint-disable */
import {useState } from "react"
import {useParams} from "react-router-dom"
import { useMatchMedia,useIndividualItem,useRecentItems} from "../../hooks"
import {Loading} from "../../components"
import {Trending} from "../../components/DataStructures/TrendingItems"
import {DesktopView,MobileView,TrendingSlider,RecentlyViewedSlider} from "."
import "./ItemDetail.css"


export const ItemDetail = () => {

const [selectSize, setSelectSize] = useState("")
const mobileStyling = "flex flex-col"
const param = useParams()
const productId = param.id

const {data} = useIndividualItem(productId)
const {myQuery} = useMatchMedia(769)


const { id, title , price, category, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data

// Add user recently viewed items hook
const {recents} = useRecentItems(data,id)

// Cart Item Object
const userItem = {
  id: data.id,
  random_index:Math.floor(Math.random() * 99000),
  title : data.title,
  price: data.price,
  quantity: 1,
  size: selectSize,
  image: imageUrl
}

class ProductObject{
  constructor(imageOne,imageTwo,imageThree,imageFour,title,price,category,selectSize,setSelectSize,item){
    this.imageOne = imageOne
    this.imageTwo = imageTwo
    this.imageThree = imageThree
    this.imageFour = imageFour
    this.title = title
    this.price = price
    this.category = category
    this.selectSize = selectSize
    this.setSelectSize = setSelectSize
    this.item = item
  }
}

  const desktop = new ProductObject(imageUrl,imageUrl_Two,imageUrl_Three,imageUrl_Four,title,price,category,selectSize,setSelectSize,userItem)
  const mobile = new ProductObject(imageUrl,imageUrl_Two,imageUrl_Three,imageUrl_Four,title,price,category,selectSize,setSelectSize,userItem)

  return (
    <section className="relative">
      {data.length === 0 && <Loading/>}
      <aside className={myQuery && myQuery.matches ? mobileStyling  : "flex flex-row"}>
        {myQuery && !myQuery.matches ? (<DesktopView data={desktop}/> ):  (<MobileView data={mobile}/>)}
      </aside>


      <aside className="h-fit flex flex-col my-12">
        <TrendingSlider  array={Trending}/>
        <RecentlyViewedSlider array={recents}/>
      </aside>
    </section>
  )
}
