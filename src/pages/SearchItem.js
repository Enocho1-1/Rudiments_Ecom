import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks"
import { ProductCard } from "../components"
import { NotFound } from "./NotFound"
import { Loading } from "../components"

export const SearchItem = ({apiPath}) => {
  const [searchParam] = useSearchParams()
  const queryItem = searchParam.get('item')

  // Custom Fetch Hook
  const { data, loading } = useFetch(apiPath,queryItem)
  

  return (
    <section>
      <header className="flex justify-center p-4">
        <h1 className="mt-12 text-xl font-Inconsolata ">Searched Item: <p className="text-xl font-Inconsolata font-semibold inline-block">"{queryItem}"</p></h1>
      </header>

      {loading && <Loading/>}
      <aside className="px-6">
        {data.length > 0 ?
          (
            <div className="grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4 ">
              {data.map( item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          
          ):
          (
            <NotFound queryItem={queryItem} />
          )
        }
      </aside>
    </section>
  )
}

 
