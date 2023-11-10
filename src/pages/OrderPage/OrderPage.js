import { useLocation } from "react-router-dom"
import { OrderSuccess,OrderFail } from "./components"

export const OrderPage = () => {
  const location = useLocation();
  const status = location.state
  const { userData, Order_status } = status
  
  console.log(Order_status)
  return (
    <section>
      {!Order_status ? <OrderFail data={userData} />  : <OrderSuccess data={userData} /> }
    </section>
  )
}
