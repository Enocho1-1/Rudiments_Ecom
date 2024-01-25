
import {useSearchData} from "../../hooks"
import { useSearchParams } from "react-router-dom"
import { ProductCard } from "../../components"
import { NotFound } from "./components/NotFound"



export const SearchItem = () => {

  const [searchParam] = useSearchParams()
  const queryItem = searchParam.get('item')
  const {data:queryData} = useSearchData(queryItem)

  return (
    <section>
      <header className="flex justify-center p-4">
        <h1 className="mt-12 text-xl font-Inconsolata ">Searched Item: <p className="text-xl font-Inconsolata font-semibold inline-block">"{queryItem}"</p></h1>
      </header>
      <aside className="px-6">
        {queryData.length > 0 ?
          (
            <div className="grid place-items-center max-mobile:grid-cols-2  mobile:max-tablet:grid-cols-2 mobile:max-tablet:gap-y-2 tablet:grid-cols-3 tablet:gap-y-4 ">
              {queryData.map( item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          
          ):( <NotFound queryItem={queryItem} />)
        }
      </aside>
    </section>
  )
}

 
