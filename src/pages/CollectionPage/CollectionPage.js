/* eslint-disable */
import { useState,useEffect} from "react"
import { useTitle } from "../../hooks"
import { useFilter } from "../../context/filterContext"
import { fetchProducts } from "../../utility"
import { PopUp } from "./components/PopUp"
import { ProductsContain,ProductCard, Pagination, Loading } from "../../components"

export const CollectionPage = () => {
  
  // Use Context Destructure
  const { state, dispatch, product, allProducts} = useFilter()
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(20)
  const [category,setCategory] = useState("All")
  const colorPopup = state.Colors
  const pricePopUp = state.Price


  const filterButtonsArr = [
    { 
      name:"All",
      type: "CLEAR",  
      value: null
    },
    { 
      name:"T-Shirts",
      type: "T-SHIRTS",  
      value: !state.TShirts
    },
    { 
      name:"Shirts",
      type: "SHIRTS",  
      value: !state.Shirts
    },
    { 
      name:"Pants",
      type:"PANTS",  
      value: !state.Pants
    },
    { 
      name:"Shorts",
      type:"SHORTS",  
      value: !state.Shorts
    },
    { 
      name:"Shoes",
      type:"SHOES",  
      value: !state.Shoes
    },
    { 
      name:"Accessories",
      type:"ACCESSORIES",  
      value: !state.Accessories
    },
    { 
        name:"Colors",
        type: "COLORS" ,  
        value: !state.Colors
    },
    { 
      name:"Price",
      type: "PRICE" ,  
      value: !state.Price
  }
  ]

  const colorButtonsArr = [
    {
      name:"white",
      color:"bg-white"
    },
    {
      name:"black",
      color:"bg-black"
    },
    {
      name:"navy",
      color:"bg-blue-950"
    },
    {
      name:"grey",
      color:"bg-gray-400"
    },
    {
      name:"brown",
      color:"bg-yellow-900"
    },
    {
      name:"green",
      color:"bg-green-700"
    },
    {
      name:"orange",
      color:"bg-orange-500"
    },
    {
      name:"pink",
      color:"bg-red-200"
    },
    {
      name:"blue",
      color:"bg-blue-600"
    },
    {
      
      
      name:"purple",
      color:"bg-purple-500 "
    },
    {
      name:"ecru",
      color:"bg-ecru"
    },
    {
      name:"beige",
      color:"bg-beige "
    },
      
    {
      name:"stone",
      color:"bg-stone"
    }
  ]

  const PriceButtonsArr = [
    {
      name:"Low to High",
      type:"LOW_HIGH"
    },
    {
      name:"High to Low",
      type:"HIGH_LOW"
    }
  ]


  useTitle("Collections")

  // Fetch All Products
  useEffect(() => {fetchProducts(allProducts)},[])

  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = product.slice(firstIndex, lastIndex)

  
  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }



  return (
    <section className="relative"> 
      <h1 className="text-center text-5xl font-Bebas mb-4 py-4 max-mobile:text-4xl mobile:max-tablet:text-4xl">MEN'S CLOTHES Collection</h1>
      {/* Color Palette */}
      { colorPopup && 
      (
        <PopUp>
           {colorButtonsArr.map( (item,index) => (
            <button key={index} className={`h-[20px] w-[20px] ${item.color} border ${item.color} mx-2`} title={item.name} onClick={() => {dispatch({type:"SELECT_COLOR", payload:{value:item.name}})}}></button>
          ))}
        </PopUp>
      )}

      {/* Price Sort Pop Up */}
      { pricePopUp &&
        (
          <PopUp>
            {PriceButtonsArr.map( (item,index) => (
              <button key={index} onClick={() => {dispatch({type: "PRICE_SORT", payload:{value: item.type}})}} className="priceBtns font-Bebas border-1 px-1.5 mx-2 py-3 text-lg">
                {item.name}
              </button>
            ))}
          </PopUp>
        )
      }
     
      {/* Filter Buttons */}
      <aside className="relative max-w-3xl my-4 m-auto flex justify-evenly flex-wrap max-[600px]:grid mobile:max-[600px]:grid-cols-4 max-mobile:grid-cols-3">
        {filterButtonsArr.map( (item,index) => (
          <button key={index} onClick={() => {dispatch({type: item.type ,payload:{value: item.value }}); setCategory(item.name);setPage(1)}} className="font-Bebas text-xl text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white px-3 border border-slate-500 ">
            {item.name}
          </button>
          ) )}
      </aside>
      <aside className="Lrgmoniter:max-w-7xl tablet:max-Lrgmoniter:max-w-5xl max-tablet:justify-center m-auto my-4 px-4 flex justify-start">
        <h1 className="font-Inconsolata text-lg font-semibold text-slate-400">{product.length}·{page > 1 && (`${page}·`)}{category}<i>{state.SelectColor === null ? "" : (`·"${state.SelectColor}"`)}{state.Sort_By === null ? "" : (`·"${state.Sort_By}"`)}</i> </h1>
      </aside>
      {product.length === 0 && <Loading/>}
   
      <ProductsContain>
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </ProductsContain>
      <Pagination totalAmount={product.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
