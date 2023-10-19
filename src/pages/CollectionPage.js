/* eslint-disable */
import { useState} from "react"
import { useTitle } from "../hooks"
import { useQuery } from "react-query"
import { useFilter } from "../context/filterContext"
import { fetchProducts } from "../utility"
import { ProductCard, Pagination, Loading } from "../components"

export const CollectionPage = () => {
  
  // Use Context Destructure
  const { state, dispatch, product, allProducts } = useFilter()
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(20)

  useTitle("Collections")


  fetchProducts(allProducts)

  // Use Query invokation
   useQuery("products", fetchProducts)


  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = product.slice(firstIndex, lastIndex)

  
  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }



  return (
    <section className="relative"> 
      <h1 className="text-center text-5xl font-Bebas mb-4 py-4 max-mobile:text-4xl mobile:max-tablet:text-4xl">MEN'S CLOTHES Collection</h1>
      {/* Filter Buttons */}
      <aside className="max-w-2xl my-4 m-auto flex justify-evenly flex-wrap max-[600px]:grid mobile:max-[600px]:grid-cols-4 max-mobile:grid-cols-3">
        <button onClick={() => {dispatch({type:"CLEAR"})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white px-3 border border-slate-500 "> All</button>
        <button onClick={() => {dispatch({type:"T-SHIRTS", payload:{value: !state.TShirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 ">T-Shirts</button>
        <button onClick={() => {dispatch({type:"SHIRTS", payload:{value: !state.Shirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 "> Shirts</button>
        <button onClick={() => {dispatch({type:"PANTS", payload:{value: !state.Pants}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Pants</button>
        <button onClick={() => {dispatch({type:"SHORTS", payload:{value: !state.Shorts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shorts</button>
        <button onClick={() => {dispatch({type:"SHOES", payload:{value: !state.Shoes}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shoes</button>
        <button onClick={() => {dispatch({type:"ACCESSORIES", payload:{value: !state.Accessories}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Accessories</button>
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
