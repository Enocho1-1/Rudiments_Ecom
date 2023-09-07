import { useState,useEffect } from "react"
import { useTitle } from "../hooks"
import { useFilter } from "../context/filterContext"
import { ProductCard, Pagination, Loading } from "../components"

export const CollectionPage = ({title}) => {
  
  // Use Context Destructure
  const { product, allProducts } = useFilter()
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(12)
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
},[])

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
      <aside className="max-w-2xl my-4 m-auto flex justify-evenly">
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> All</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 ">T-Shirts</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shirts</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Jeans</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shorts</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Shoes</span>
        <span className="font-Inconsolata font-medium text-md text-black hover:cursor-pointer hover:text-slate-500 px-3 border border-slate-500 "> Accessories</span>
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
