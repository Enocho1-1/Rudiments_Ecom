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
  const [colorReveal,setColorReveal] = useState(false)
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
        <div className="absolute top-[3%] min-[1560px]:right-[15%] min-[1370px]:max-[1560px]:right-[10%] max-[1370px]:right-[2%] max-[1130px]:relative max-[1130px]:top-0 max-[1130px]:m-auto max-[600px]:mx-4 border-2 border-gray-200 rounded-md p-4 flex flex-wrap gap-y-2 max-w-[12.5rem] max-[1130px]:max-w-[35rem] ">
          <button className="h-[20px] w-[20px] bg-white border border-gray-400 mx-2" title="white"></button>
          <button className="h-[20px] w-[20px] bg-black mx-2" title="black"></button>
          <button className="h-[20px] w-[20px] bg-blue-950 mx-2" title="navy"></button>
          <button className="h-[20px] w-[20px] bg-gray-400 mx-2" title="grey"></button>
          <button className="h-[20px] w-[20px] bg-yellow-900 mx-2" title="brown"></button>
          <button className="h-[20px] w-[20px] bg-green-700 mx-2" title="green"></button>
          <button className="h-[20px] w-[20px] bg-orange-500 mx-2" title="orange"></button>
          <button className="h-[20px] w-[20px] bg-red-200 mx-2" title="pink"></button>
          <button className="h-[20px] w-[20px] bg-blue-600 mx-2" title="blue"></button>
          <button className="h-[20px] w-[20px] bg-purple-500 mx-2" title="purple"></button>
          <button className="h-[20px] w-[20px] bg-ecru mx-2" title="ecru"></button>
          <button className="h-[20px] w-[20px] bg-khaki mx-2" title="khaki"></button>
          <button className="h-[20px] w-[20px] bg-beige mx-2" title="beige"></button>
          <button className="h-[20px] w-[20px] bg-stone mx-2" title="stone"></button>
        </div>
      )}
     
      {/* Filter Buttons */}
      <aside className="relative max-w-2xl my-4 m-auto flex justify-evenly flex-wrap max-[600px]:grid mobile:max-[600px]:grid-cols-4 max-mobile:grid-cols-3">
        <button onClick={() => {dispatch({type:"CLEAR"})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white px-3 border border-slate-500 "> All</button>
        <button onClick={() => {dispatch({type:"T-SHIRTS", payload:{value: !state.TShirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 ">T-Shirts</button>
        <button onClick={() => {dispatch({type:"SHIRTS", payload:{value: !state.Shirts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 active:bg-slate-500 active:text-white  px-3 border border-slate-500 "> Shirts</button>
        <button onClick={() => {dispatch({type:"PANTS", payload:{value: !state.Pants}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Pants</button>
        <button onClick={() => {dispatch({type:"SHORTS", payload:{value: !state.Shorts}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shorts</button>
        <button onClick={() => {dispatch({type:"SHOES", payload:{value: !state.Shoes}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shoes</button>
        <button onClick={() => {dispatch({type:"ACCESSORIES", payload:{value: !state.Accessories}})}} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Accessories</button>
        <button  onClick={() => setColorReveal(!colorReveal)} className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 ">Colors</button>
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
