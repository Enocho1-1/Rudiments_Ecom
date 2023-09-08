import { useState,useEffect } from "react"
import { useTitle } from "../hooks"
import { useFilter } from "../context/filterContext"
import { ProductCard, Pagination, Loading } from "../components"

export const CollectionPage = () => {
  
  // Use Context Destructure
  const { state, dispatch, product, allProducts } = useFilter()
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(20)
  const [loading, setLoading] = useState(true)
  useTitle("Collections")

  // Fetch All Products
  useEffect(() => {
    const fetchProducts = async () => {
    try{
      setLoading(true)
      const response = await fetch(`https://api.mocki.io/v2/f3308aac/shop`)
      const result = await response.json()
      allProducts(result)
      setLoading(false)
    }catch(error){
      console.log(error)
    }
  }

  fetchProducts();
},[] )

  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = product.slice(firstIndex, lastIndex)

  
  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }



  return (
    <section> 
      <h1 className="text-center text-5xl font-Bebas mb-4 py-4 max-mobile:text-4xl mobile:max-tablet:text-4xl">MEN'S CLOTHES Collection</h1>
      {/* Filter Buttons */}
      <aside className="max-w-2xl my-4 m-auto flex justify-evenly flex-wrap">
        <span onClick={() => {dispatch({type:"CLEAR", payload:{value:false, value_two:false,value_three:false,value_four:false,value_five:false,value_six:false}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white px-3 border border-slate-500 "> All</span>
        <span onClick={() => {dispatch({type:"T-SHIRTS", payload:{value: !state.TShirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 ">T-Shirts</span>
        <span onClick={() => {dispatch({type:"SHIRTS", payload:{value: !state.Shirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 "> Shirts</span>
        <span onClick={() => {dispatch({type:"PANTS", payload:{value: !state.Pants}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Pants</span>
        <span onClick={() => {dispatch({type:"SHORTS", payload:{value: !state.Shorts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shorts</span>
        <span onClick={() => {dispatch({type:"SHOES", payload:{value: !state.Shoes}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shoes</span>
        <span onClick={() => {dispatch({type:"ACCESSORIES", payload:{value: !state.Accessories}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Accessories</span>
      </aside>
      <aside className="relative left-16 my-3">
        <h1 className="font-Inconsolata text-2xl font-semibold text-slate-500">Product Count({product.length})</h1>
      </aside>
      {loading && <Loading/>}
   
      <aside className="m-auto relative px-4 grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={product.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
