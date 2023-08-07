import { useState } from "react"
import { useTitle } from "../hooks/useTitle"
import { useFetch } from "../hooks/useFetch"
import { ProductCard, Pagination, Loading } from "../components"

export const PiecePage = ({apiPath, title}) => {
  useTitle(title)
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(6)
  const { data, loading } = useFetch(apiPath)


  
  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = data.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }
  return (
    <section>
      <header className="w-fit"></header>
      <h1 className="text-center mt-6 text-5xl font-Bebas">{title}</h1>
      {loading && <Loading/>}
      <aside className="m-auto mt-4 px-4 grid max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4 justify-items-center">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
