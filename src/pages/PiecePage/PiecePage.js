import { useState,useEffect } from "react"
import { useTitle } from "../../hooks/useTitle"
import { fetchClothingPiece } from "../../utility"
import { ProductsContain,ProductCard, Pagination, Loading } from "../../components"

export const PiecePage = ({apiPath, title}) => {
  useTitle(title)
  const [data,setData] = useState([])
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    fetchClothingPiece(apiPath,setData)
  },[apiPath])
 
  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = data.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }
  return (
    <section>
      <header className="w-fit"></header>
      <h1 className="text-center mt-6 text-5xl font-Bebas max-mobile:text-4xl mobile:max-tablet:text-4xl">{title}</h1>
      <aside className="Lrgmoniter:max-w-7xl tablet:max-Lrgmoniter:max-w-5xl max-tablet:justify-center m-auto my-4 px-4 flex justify-start">
        <h1 className="font-Inconsolata text-lg font-semibold text-slate-400">{data.length}·{page}</h1>
      </aside>
      {data.length ? 
( <ProductsContain>
      {products.map( item => (
        <ProductCard key={item.id} product={item}/>
      ))}
    </ProductsContain>)
      : <Loading/>}
     
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
