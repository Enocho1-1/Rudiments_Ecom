import { useLocation, Link  } from "react-router-dom"
import { useTitle } from "../../hooks/index"
import { OrderItems } from "./components/OrderItems"
import  arrow from "../../assests/arrow.png"

export const ViewOrder = () => {
  useTitle("Order Details")
  const location = useLocation()
  const orderDetails = location.state.data
  const date = new Date()
  const {userCart,userInfo } = orderDetails
  const { orderDate,orderNo,orderTime,orderTotal,name} = userInfo

  return (
    <section className="font-Inconsolata relative">
        <Link to="/login" className="relative left-[15%] mt-4 px-4 flex hover:text-black">
            <img src={arrow} className="mt-[2px] h-6 self-center" alt="" />
            <h1 className="text-xl font-semibold mx-2 ">Back to my purchases</h1>
        </Link>
      <div className="  m-auto max-w-3xl flex flex-col">
        <div className="mt-[4.688rem] flex max-tablet:flex-col">
          {/* Order Details & Delivery Info Boxes */}
          <div className="flex flex-col w-[25rem] max-tablet:w-[100%]">
            <span className="rounded-md flex flex-col  p-4 bg-gray-200 w-inherit">
              <h1 className="text-2xl font-bold">Order Details</h1>
              <aside className="mt-4 text-lg">
                <p>Ordered on: {orderDate}</p>
                <p>Ordered no: {orderNo}</p>
                <p>Status: Despatched</p>
              </aside>
            </span>

            <span className="mt-4 rounded-md flex flex-col  p-4 bg-gray-200 w-inherit">
              <h1 className="text-2xl font-bold">Delivery details</h1>
              <aside className="mt-4 text-lg">
                <p>{name}</p>
                <p>929 W. Creekside Road,Campbell, California, United States of America, 95008</p>
                <p className="mt-3 inline-block">Delivery type:  <span>STANDARD</span></p>
              </aside>
            </span>
          </div>

          {/* Tracking */}
          <div className="ml-6 w-[25rem] max-tablet:w-[100%] max-tablet:ml-0 max-tablet:mt-4 rounded-md flex flex-col  p-4 bg-gray-200 ">
            <h1 className="text-2xl font-bold">Track and manage order</h1>
            <span className="mt-3 text-lg inline-block">Arriving on or before  <p className="text-3xl font-bold">1 DEC 2023</p></span>

            <span className="mt-24">
              <h1 className="text-2xl font-bold">Tracking</h1>
              <aside className="mt-8 text-sm">
                <p className="flex justify-between">{orderDate}: Order placed <span className="text-sm self-center">{orderTime}</span></p>
                <p className="flex justify-between">Delivery Status: In Route <span className="text-sm self-center">{date.toLocaleTimeString()}</span></p>
              </aside>

              <aside className="tracking mt-10">
                <h1 className="text-md font-semibold">View tracking details</h1>
                <div className="mt-4 flex items-center">
                 <span className="text-2xl text-black bi bi-info-circle self-center"></span>
                 <p className=" ml-2 text-xs text-slate-900">Returns are no longer available for this order</p>
                </div>
              </aside>
            </span>
          </div>
        </div>
        {/* Items in the Order */}
        <div className=" mt-6 p-6 bg-gray-200 w-inherit">
          <h1 className="text-xl text-center font-semibold mx-2">Items in this order</h1>
          <div className="mt-2 grid grid-cols-gridResponsive place-content-center">
            {userCart.map( (item, index) => (
              <OrderItems  key={index} product={item}/>
            ))}
          </div>
          {[{valueOne: `${userCart.length} items`, valueTwo:`$${orderTotal}.00`},{valueOne: 'STANDARD', valueTwo:'$0.00'},{valueOne: 'Grand total ', valueTwo:`$${orderTotal}.00`}].map( (item,index) => (
             <div key={index} className="mt-4 px-2 text-xl flex justify-between">
              <h1>{item.valueOne}</h1>
              <p>{item.valueTwo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
