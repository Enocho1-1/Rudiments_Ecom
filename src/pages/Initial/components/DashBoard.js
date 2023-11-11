/* eslint-disable */
import { useState,useEffect } from "react"
import { useFilter } from "../../../context/filterContext"
import { getUserOrders} from "../../../utility/index"
import { Link } from "react-router-dom"
import { RecentPurchases,DashEmpty } from "./index"
import qrCode from "../../../assests/qr-code.png"

export const DashBoard = () => {
  const {  retrieveUserInfo } = useFilter()
  const { firstName, firstTimeUser,userToken,userID } = retrieveUserInfo()
  const [data,setData] = useState([])
  const [ notFound,setNotFound] = useState(true)

  const Get_Options = {
    method:"GET",
    headers:{ 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}`}
  }

  useEffect(() => {
    getUserOrders(Get_Options,setData,setNotFound,userID)
  },[])
  
  return (
    <div className="max-w-7xl m-auto p-4 flex">

        <aside className="w-[21.875rem] flex flex-col">
          <span className="w-inherit border border-slate-200 rounded-md p-4 flex justify-between">
            <p className="max-w-[75px] font-Inconsolata font-semibold text-2xl truncate ...">{firstName}</p>

            <div className="flex">
              <p className="self-center font-Inconsolata text-sm text-slate-500">My Account ID</p>
              <img src={qrCode} className="ml-2 h-6 w-6 self-center" alt="" />
            </div>
          </span>
          {/* First Time user offer */}
          { firstTimeUser 
            && 
            ( 
              <span className="mt-3 px-4 flex flex-col">
                <h1 className="font-Inconsolata text-md text-slate-500">MY OFFERS:</h1>
                <div className='mt-4 p-3 bg-slate-300 w-inherit text-center flex flex-col justify-center items-center'>
                  <p className='font-Inconsolata text-lg font-semibold text-black'>10% off in-store purchase</p>
                  <p className='font-Inconsolata text-md font-semibold text-slate-600'>To redeem this offer in store, show your Account ID at the checkout when you purchase in store today.</p>
                </div>
              </span>
            )
          }
         
          <span></span>
          <Link to="/login" onClick={() => sessionStorage.clear()}>Sign Out</Link>
        </aside>
        <aside className="w-[40.625rem] ml-10">
          <h1 className="mt-10 font-Inconsolata font-semibold text-3xl">RECENT PURCHASES</h1>
          { notFound ? <DashEmpty/> : <RecentPurchases userData={data}/>}
        </aside>
      
    </div>
  )
}
