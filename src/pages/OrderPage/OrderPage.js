import { useLocation } from "react-router-dom"
import { OrderSuccess,OrderFail } from "./components"

export const OrderPage = () => {
  const location = useLocation();
  const status = location.state
  const { userData, Order_status } = status
  
  return (
    <section>
      {!Order_status ? <OrderFail />  : <OrderSuccess data={userData} /> }
    </section>
  )
}
