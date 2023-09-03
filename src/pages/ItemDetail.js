
import { useEffect,useState } from "react"
import { useFetch } from "../hooks"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../store/CartSlice"
import { addRecent } from "../store/RecentSlice"
import { Slider } from "./ProductPage/Slider"
import { TrendingSlider } from "./ProductPage/TrendingSlider"
import { Loading,SideCart } from "../components"
import { shirtSizes, pantSizes, shoeSizes } from "../DataArray/sizes"
import { Trending } from "../DataArray/Trending"
import { DesktopShirtSize, DesktopSizes, MobileShirtSize, MobileSizes} from "./Sizes"
import Logo from "../assests/cube.png"
import "./ItemDetail.css"

export const ItemDetail = ({apiPath}) => {
  const [shirt, setShirt] = useState(false)
  const [pants, setPants] = useState(false)
  const [shoes, setShoes] = useState(false)
  const [sidecart, setSideCart] = useState(false)
  const [selectSize, setSelectSize] = useState("")
  const [myQuery, setMyQuery] = useState({
    matches: window.innerWidth < 769 ? true : false
  })

  const param = useParams()
  const productId = param.id
  const dispatch = useDispatch()
  const mobileView = "flex flex-col"
  let stringArray

  // Custom Fetch Hook
  const { data, loading } = useFetch(apiPath, productId)

  // Destructure Returned JSON
 const {  id, title , price, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data

//  Recently Viewed Reducer 
 useEffect(() => {
  dispatch(addRecent(data))
},[id])



//  Window MatchMedia
 useEffect(() => {
  let mediaQuery = window.matchMedia("(max-width: 769px)")
  mediaQuery.addEventListener("change", setMyQuery)
 },[])

 //  Title Array function
 const productitle = (string) => {
  stringArray = string.split(' ')
}

// Clothing Piece Validation
  useEffect(() => { 
    if(title){
    productitle(title)

    stringArray.includes("Tee") || stringArray.includes( "Button") || stringArray.includes("Shirt") ? 
    setShirt(true) : stringArray.includes("trousers") || stringArray.includes( "joggers") || stringArray.includes("Jeans") || stringArray.includes("shorts")? 
    setPants(true) : stringArray.includes("Shoes") || stringArray.includes( "loafers") || stringArray.includes("trainers") ||     stringArray.includes("sandals") || stringArray.includes("sliders") ? setShoes(true) : console.log("done")
  }
  },[title,stringArray])
  


  // Object Literal
  const userItem = {
    id: data.id,
    title : data.title,
    price: data.price,
    quantity: '1',
    size: selectSize,
    image: imageUrl
  }

 


  return (
    <section className="relative">
      {loading && <Loading/>}
      <aside className={myQuery && myQuery.matches ? mobileView : "flex flex-row"}>
        {myQuery && !myQuery.matches
        ? 
        (
          // Responsive Design range: minimum 769px 
        <>
            {/* Side Cart Reveal */}
            { sidecart && < SideCart setSideCart={setSideCart}/>}
            <div></div>
            
            {/* Product Images */}
            <div className="grid grid-cols-2 grid-rows-2 px-4 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows tablet:max-laptop:w-[60%] laptop:max-desktop:w-[70%] desktop:w-[75%]  individualImg">
              <img src={imageUrl} className=" w-full " alt="..."/>
              <img src={imageUrl_Two} className="w-full " alt="..."/>
              <img src={imageUrl_Three} className=" w-full " alt="..."/>
              {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
            </div>

            {/* Product Info */}
            <div className=" flex flex-col desktop:fixed right-0 tablet:max-laptop:w-[50%] laptop:max-desktop:w-[30%] desktop:w-[25%]">
              <aside className="mt-12 flex flex-col">
                <h1 className=" font-Inconsolata text-xl justify-self-center">{title}</h1>
                <p className="font-normal mt-2 text-xl">${price}.00</p>
              </aside>

              {/* Sizes */}
              { 
              shirt ? (<DesktopShirtSize array={shirtSizes} setSelectSize={setSelectSize} />) 
              : pants ?(< DesktopSizes array={pantSizes} selectSize={selectSize} setSelectSize={setSelectSize}/>
              ): shoes ? ( < DesktopSizes array={shoeSizes} selectSize={selectSize} setSelectSize={setSelectSize}/> ) 
              : (<div></div>)
              }

              {/* Add To Cart */}
              <button type="button" onClick={() => {dispatch(addItemToCart(userItem)); setSideCart(true)}} className=" cart flex flew-row justify-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-8 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
            </div> 
        </>
 
        ): 
       
        (
           // Responsive Design range:0px - 769px
          <> 
          { sidecart && < SideCart setSideCart={setSideCart}/>}
          {/* Image Carousel  */}
          <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner items-carousel">
              <div className="carousel-item active">
                <img src={imageUrl} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imageUrl_Two} className="block w-full" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imageUrl_Three} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="w-full">
            <aside className="flex justify-between p-3 mt-4">
              <h1 className=" font-Bebas text-2xl">{title}</h1>
              <p className="font-semibold text-xl">${price}.00</p>
            </aside>
            <hr />
            <aside className="flex flex-col">

                { 
                    // Shirt Size CSS
                    shirt ? 
                    (<MobileShirtSize array={shirtSizes} setSelectSize={selectSize} />) 
                    : 
                    // Pants Size CSS
                    pants ?
                    (<MobileSizes array={pantSizes} selectSize={selectSize} setSelectSize={setSelectSize}/>)
                    : shoes ? 
                    (<MobileSizes array={shoeSizes} selectSize={selectSize} setSelectSize={setSelectSize}/>) 
                    : ( <div></div>)
                  }
                    {/* Add To Cart */}
                    <button type="button" onClick={() => {dispatch(addItemToCart(userItem )); setSideCart(true)}} className=" cart flex justify-center self-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-2 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
            </aside>
          </div>
          </>
          
      ) 
     
      }
      </aside>

      <aside className="h-[400px] my-8">
        {/* Trending Array */}
        <TrendingSlider  array={Trending}/>

        {/* Recently Viewed */}
        {/* <Slider section="Trending Now" array={Trending}/> */}
      </aside>
    </section>
  )
}
