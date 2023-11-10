import { useLocation } from "react-router-dom"
import { OrderSuccess,OrderFail } from "./components"

export const OrderPage = () => {
  const location = useLocation();
  
  console.log(location)
  return (
    <section>OrderPage</section>
  )
}
