import { useState,useEffect } from "react"
import { useTitle } from "../../hooks/useTitle"
import { fetchClothingPiece } from "../../utility"
import { ProductCard, Pagination, Loading } from "../../components"

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
        <h1 className="font-Inconsolata text-lg font-semibold text-slate-400">Product Count-{data.length}</h1>
      </aside>
      {data.length ? 
( <aside className="m-auto mt-4 px-4 grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4">
      {products.map( item => (
        <ProductCard key={item.id} product={item}/>
      ))}
    </aside>)
      : <Loading/>}
     
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
