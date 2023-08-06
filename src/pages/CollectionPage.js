import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { ProductCard, Pagination } from "../components"

export const CollectionPage = ({apiPath}) => {

  const [page, setPage] = useState(1)
  const [postsPerPage] = useState(6)
  const { data } = useFetch(apiPath)

  const lastIndex = page * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const products = data.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }
  console.log(data.length)

  return (
    <section>
      <h1 className="mx-4 mt-6 text-5xl font-Bebas">MEN'S CLOTHES Collection</h1>
      <aside className="m-auto mt-4 px-4 grid grid-cols-3 gap-y-4">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
