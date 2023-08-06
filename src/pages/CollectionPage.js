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


  return (
    <section>
      <header className="w-fit"></header>
      <h1 className="text-center mt-6 text-5xl font-Bebas">MEN'S CLOTHES Collection</h1>
      <aside className="m-auto mt-4 px-4 grid max-mobile:grid-cols-2 mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4 justify-items-center">
        {products.map( item => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </aside>
      <Pagination totalAmount={data.length} postsPerPage={postsPerPage} paginate={paginate} />
    </section>
  )
}
