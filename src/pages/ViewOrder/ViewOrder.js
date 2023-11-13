import { useLocation, Link  } from "react-router-dom"
import  arrow from "../../assests/arrow.png"

export const ViewOrder = () => {
  const location = useLocation()
  const orderDetails = location.state.data
  const {userCart,userInfo } = orderDetails
  const { orderDate,orderNo,name} = userInfo

  return (
    <section className="font-Inconsolata relative">
        <Link to="/login" className="relative left-[15%] mt-4 px-4 flex hover:text-black">
            <img src={arrow} className="mt-[2px] h-6 self-center" alt="" />
            <h1 className="text-xl font-Inconsolata font-semibold mx-2 ">Back to my purchases</h1>
        </Link>
      <div className="m-auto max-w-4xl flex ">
        <div className="mt-[4.688rem] flex">
          {/* Order Details & Delivery Info Boxes */}
          <div className="flex flex-col w-[400px]">
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
          <div></div>
        </div>
      </div>
    </section>
  )
}
