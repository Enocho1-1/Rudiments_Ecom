import { useLocation } from "react-router-dom"

export const ViewOrder = () => {
  const location = useLocation()
  console.log(location)
  return (
    <section>ViewOrder</section>
  )
}
