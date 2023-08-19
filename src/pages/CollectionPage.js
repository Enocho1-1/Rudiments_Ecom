import { useState } from "react"
import { useFetch, useTitle } from "../hooks"
import { ProductCard, Pagination, Loading } from "../components"

export const CollectionPage = ({apiPath, title}) => {
  
  useTitle(title)
  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(12)
  const { data, loading } = useFetch(apiPath)


  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = data.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }


  return (
    <section> 
      <h1 className="text-center text-5xl font-Bebas mb-4 py-4 max-mobile:text-4xl mobile:max-tablet:text-4xl">MEN'S CLOTHES Collection</h1>
      {loading && <Loading/>}
      <aside className="m-auto px-4 grid max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4 justify-items-center">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
