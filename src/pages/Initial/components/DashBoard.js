/* eslint-disable */
import { useState,useEffect } from "react"
import { useFilter } from "../../../context/filterContext"
import { useTitle } from "../../../hooks"
import { getUserOrders} from "../../../utility/index"
import { NavLink,Link } from "react-router-dom"
import { RecentPurchases,DashEmpty } from "./index"
import qrCode from "../../../assests/qr-code.png"

export const DashBoard = () => {
  useTitle("My Account")
  const {  retrieveUserInfo } = useFilter()
  const { firstName, promoCode,userToken,userID } = retrieveUserInfo()
  const [data,setData] = useState([])
  const [ noOrder,setNoOrder] = useState(true)

  const Get_Options = {
    method:"GET",
    headers:{ 'Content-Type': 'application/json', Authorization: `Bearer ${userToken}`}
  }

  useEffect(() => {
     getUserOrders(Get_Options,setData,setNoOrder,userID)
  },[])
  
  return (
    <div className="font-Inconsolata max-w-7xl m-auto p-4 flex max-tablet:flex-col">

        <aside className="w-[21.875rem] max-tablet:w-[100%] flex flex-col">
          <span className="w-inherit border border-slate-200 rounded-md p-4 flex justify-between">
            <p className="max-w-[75px]  font-semibold text-2xl truncate ...">{firstName}</p>

            <div className="flex">
              <p className="self-center  text-sm text-slate-500">My Account ID</p>
              <img src={qrCode} className="ml-2 h-6 w-6 self-center" alt="" />
            </div>
          </span>
          {/* First Time user offer */}
          { promoCode
            && 
            ( 
              <span className="mt-3 px-4 flex flex-col">
                <h1 className=" text-md text-slate-500">MY OFFERS:</h1>
                <div className='mt-4 p-3 bg-slate-200 w-inherit text-center flex flex-col justify-center items-center'>
                  <p className=' text-lg font-semibold text-black'>20% off first purchase</p>
                  <p className=' text-md font-semibold text-slate-600'>Use Promo-Code: {promoCode}</p>
                </div>
              </span>
            )
          }

          <NavLink to="/myaccount/registered-details" className="mt-2 w-inherit font-semibold text-lg border border-slate-200 rounded-md flex justify-between p-4 hover:text-inherit">Login Details <span className="text-2xl bi bi-arrow-bar-right"></span></NavLink>
          <Link to="/login" onClick={() => sessionStorage.clear()}  className="mt-2 w-inherit font-semibold text-lg border border-slate-200 rounded-md flex justify-between p-4 hover:text-inherit">Sign Out<span className="text-2xl bi bi-box-arrow-right"></span></Link>
        </aside>
        <aside className="w-[46.875rem] ml-10 max-tablet:w-[100%] max-tablet:ml-[0px]">
          <h1 className="mt-10  font-semibold text-3xl">RECENT PURCHASES</h1>
          {  data.length === 0 || noOrder ? <DashEmpty/> : <RecentPurchases userData={data}/>}
        </aside>
      
    </div>
  )
}
