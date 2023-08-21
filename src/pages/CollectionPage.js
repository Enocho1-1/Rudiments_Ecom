import { useState } from "react"
import { useFetch, useTitle } from "../hooks"
import { ProductCard, Pagination, Loading, FilterMenu } from "../components"
import { totalCollection } from "../filterArrays/totalCategory"

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
      {/* Filter Options Menu */}
      <aside className="max-w-xl my-4 p-2">
        <FilterMenu name="Category" array={totalCollection}/>
      </aside>
      <aside className="m-auto relative px-4 grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
