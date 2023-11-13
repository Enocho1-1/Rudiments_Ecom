import { useLocation, Link  } from "react-router-dom"
import { useTitle } from "../../hooks/index"
import  arrow from "../../assests/arrow.png"

export const ViewOrder = () => {
  useTitle("Order Details")
  const location = useLocation()
  const orderDetails = location.state.data
  const date = new Date()
  const {userCart,userInfo } = orderDetails
  const { orderDate,orderNo,orderTime,name} = userInfo

  return (
    <section className="font-Inconsolata relative">
        <Link to="/login" className="relative left-[15%] mt-4 px-4 flex hover:text-black">
            <img src={arrow} className="mt-[2px] h-6 self-center" alt="" />
            <h1 className="text-xl font-Inconsolata font-semibold mx-2 ">Back to my purchases</h1>
        </Link>
      <div className="m-auto max-w-4xl flex flex-col">
        <div className="mt-[4.688rem] flex">
          {/* Order Details & Delivery Info Boxes */}
          <div className="flex flex-col w-[25rem]">
            <span className="rounded-md flex flex-col  p-4 bg-slate-200 w-inherit">
              <h1 className="text-2xl font-bold">Order Details</h1>
              <aside className="mt-4 text-lg">
                <p>Ordered on: {orderDate}</p>
                <p>Ordered no: {orderNo}</p>
                <p>Status: Despatched</p>
              </aside>
            </span>

            <span className="mt-4 rounded-md flex flex-col  p-4 bg-slate-200 w-inherit">
              <h1 className="text-2xl font-bold">Delivery details</h1>
              <aside className="mt-4 text-lg">
                <p>{name}</p>
                <p>929 W. Creekside Road,Campbell, California, United States of America, 95008</p>
                <p className="mt-3 inline-block">Delivery type:  <p>STANDARD</p></p>
              </aside>
            </span>
          </div>

          {/* Tracking */}
          <div className="ml-6 w-[25rem] rounded-md flex flex-col  p-4 bg-slate-200 ">
            <h1 className="text-2xl font-bold">Track and manage order</h1>
            <p className="mt-3 text-lg inline-block">Arriving on or before  <p className="text-3xl font-bold">1 DEC 2023</p></p>

            <span className="mt-24">
              <h1 className="text-2xl font-bold">Tracking</h1>
              <aside className="mt-8 text-md">
                <p className="flex justify-between">{orderDate}: Order placed <p className="text-sm self-center">{orderTime}</p></p>
                <p className="flex justify-between">Delivery Status: In Route <p className="text-sm self-center">{date.toLocaleTimeString()}</p></p>
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
        <div></div>
      </div>
    </section>
  )
}
