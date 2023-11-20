/* eslint-disable */
import { useState,useEffect} from "react"
import { useTitle } from "../../hooks"
import { useFilter } from "../../context/filterContext"
import { fetchProducts } from "../../utility"
import { ProductCard, Pagination, Loading } from "../../components"

export const CollectionPage = () => {
  
  // Use Context Destructure
  const { state, dispatch, product, allProducts } = useFilter()
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(20)
  const colorReveal = state.Colors
  const colorButtonsArr = [
    {
      name:"white",
      color:"border-gray-200"
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
      name:"khaki",
      color:"bg-khaki"
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
      { colorReveal && 
      (
        <div className="absolute Lrgmoniter:top-[3%] Lrgmoniter:right-[10%]  max-Lrgmoniter:relative max-Lrgmoniter:top-0 max-Lrgmoniter:m-auto max-[600px]:mx-4 border-2 border-gray-200 rounded-md p-4 flex flex-wrap gap-y-2 max-w-[15rem] max-Lrgmoniter:max-w-[35rem] ">
          {colorButtonsArr.map( (item,index) => (
            <button key={index} className={`h-[20px] w-[20px] ${item.color} border ${item.color} mx-2`} title={item.name}></button>
          ))}
        </div>
      )}
     
      {/* Filter Buttons */}
      <aside className="relative max-w-2xl my-4 m-auto flex justify-evenly flex-wrap max-[600px]:grid mobile:max-[600px]:grid-cols-4 max-mobile:grid-cols-3">
        {filterButtonsArr.map( (item,index) => (
          <button key={index} onClick={() => dispatch({type: item.type ,payload:{value: item.value }})} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white px-3 border border-slate-500 ">
            {item.name}
          </button>
          ) )}
      </aside>
      <aside className="Lrgmoniter:max-w-7xl tablet:max-Lrgmoniter:max-w-5xl max-tablet:justify-center m-auto my-4 px-4 flex justify-start">
        <h1 className="font-Inconsolata text-lg font-semibold text-slate-400">Product Count-{product.length}</h1>
      </aside>
      {product.length === 0 && <Loading/>}
   
      <aside className="m-auto relative px-4 grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={product.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
