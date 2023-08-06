import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetail = () => {
  const [data, setData] = useState([])
  const param = useParams()
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch(`https://api.mocki.io/v2/f3308aac/item/${param.id}`)
        const result = await response.json()
        setData(result)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[param.id])

  console.log(data)
  return (
    <div>ItemDetail</div>
  )
}
