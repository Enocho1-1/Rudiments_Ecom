import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks"
import { NotFound } from "./NotFound"
import { Loading } from "../components"

export const SearchItem = ({apiPath}) => {
  const [searchParam] = useSearchParams()
  const queryItem = searchParam.get('item')
  
  // Custom Hook
  const { data, loading } = useFetch(apiPath,queryItem)
  


  return (
    <section>
      <header className="flex justify-center p-4">
        <h1 className="mt-12 text-xl font-Inconsolata ">Searched Item: <p className="text-xl font-Inconsolata font-semibold inline-block">"{queryItem}"</p></h1>
      </header>

      {loading && <Loading/>}
      <aside>
        {data.length > 0 ?
          (
            <div>
              <h1>Item Found</h1>
            </div>
          
          ):
          (
            <NotFound/>
          )
        }
      </aside>
    </section>
  )
}

 
