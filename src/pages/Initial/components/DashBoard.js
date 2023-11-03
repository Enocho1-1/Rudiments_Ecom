import { useFilter } from "../../../context/filterContext"
import { Link } from "react-router-dom"
import qrCode from "../../../assests/qr-code.png"

export const DashBoard = () => {
  const {  retrieveUserInfo } = useFilter()
  const { firstName } = retrieveUserInfo()
  
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
          <Link to="/login" onClick={() => sessionStorage.clear()}>Sign Out</Link>
        </aside>
      
    </div>
  )
}
