import { useTitle } from "../../hooks"
import { useFilter } from "../../context/filterContext"
import { Link } from "react-router-dom"

export const AccountDetail = () => {
    useTitle("Login Details")
    const { retrieveUserInfo } = useFilter()
    const {userEmail } = retrieveUserInfo()
  return (
    <section className="font-Inconsolata">
        <Link to="/login" className="relative left-[15%] mt-4 px-4 flex hover:text-black">
            <span className="text-2xl bi bi-arrow-bar-left"></span>
            <h1 className="text-xl font-semibold mx-2 ">Back to my purchases</h1>
        </Link>
        <div className="relative mt-[100px] flex justify-center items-center">
            <span className=" rounded-md flex flex-col  py-8 px-8 bg-gray-200">
                <header className="mt-2">
                    <h1 className="font-semibold text-2xl">Email Address</h1>
                    <p className="text-md">Delivery updates for orders placed are also sent to the email provided</p>
                </header>
                <form className="mt-4 flex flex-col">
                    <label className="mt-2 mb-2 text-lg">Email</label>
                    <input className="max-w-[500px]" type="email" name="email"  value={userEmail} disabled />
                    <label className="mt-2 mb-2 text-lg">Password</label>
                    <input className="max-w-[500px]" type="password" name="password"  placeholder="*******" disabled />
                </form>
       
            </span>
        </div>
    </section>
  )
}
