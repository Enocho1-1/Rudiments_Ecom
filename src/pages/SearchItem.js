import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loading } from "../components"

export const SearchItem = ({apiPath}) => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParam] = useSearchParams()
  const queryItem = searchParam.get('item')
  

  // Fetch Searched Items
  useEffect(() => {
    const fetchSearch = async () => {
      try{
        setLoading(true)
        const response = await fetch(`https://api.mocki.io/v2/f3308aac/search/${queryItem}`)
        const result = await response.json()
        setItem(result)
        setLoading(false)
      } catch(error){
        console.log(error)
      }
    }
    fetchSearch()
  },[queryItem])



 console.log(item.length)

  return (
    <section>
      <header className="flex justify-center p-4">
        <h1 className="mt-12 text-xl font-Inconsolata">Searched Item: "{queryItem}"</h1>
      </header>

      {loading && <Loading/>}
      <aside>
        {item.length === 0 ?
          (
            <div>
              <h1>Not Found</h1>
            </div>
          ):
          (
            <div>
              <h1>Item Found</h1>
            </div>
          )
        }
      </aside>
    </section>
  )
}

 
