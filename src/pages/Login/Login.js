import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useFilter } from "../../context/filterContext"
import { useTitle } from "../../hooks"
import { loginUser } from "../../utility"
import { RobotModal } from "./components/RobotModal"
import cryptic from "../../assests/robotText.PNG"
import reCaptha from "../../assests/RecaptchaLogo.svg.png"

export const Login = () => {
  useTitle("Sign-In")
  const { state } = useFilter()
  const [isError,setIsError] = useState(false)
  const [robotModal,setRobotModal] = useState(false)
  const userEmail = JSON.parse(sessionStorage.getItem("userEmail"))
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      email: userEmail,
      password: e.target.password.value
    }
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }

   
    loginUser(options,setIsError,navigate)
    e.target.reset()
  }

  return (
    <section className="relative font-Inconsolata flex flex-col justify-center items-center">
      <h1 className="mt-[4.688rem] mb-4 text-3xl  font-light">SIGN IN</h1>
      <div className="p-4 bg-gray-200 rounded-sm flex flex-col items-center">
        <h1 className="my-2 text-2xl font-Bebas text-blk">{userEmail}</h1>
        { isError && ( <p className="my-3 max-w-[300px] text-red-700  text-sm">Unable to find a match for your email or password. Please check your details and try again.</p>)}
        <form onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl  font-medium text-blk">Password</label>
            <input type="password" name="password" className="px-6 py-2" required/>
            <span className="bg-gray-100 flex justify-between rounded-sm mt-2 px-2 py-3 ">
              <div className="flex items-center">
                <input  onClick={() => setRobotModal(!robotModal)} type="checkbox" className="p-2" required/>
                <p className=" text-sm mx-2">I'm not a robot</p>
              </div>
              <img src={reCaptha} className="h-[35px] w-[35px]" alt="" />
            </span>
            { robotModal && <RobotModal text={state.crypticText}/>}
            <button type="submit" className="bg-blk p-2  text-xl text-white font-Bebas mt-4">Sign In</button>
            <p className="mt-2 text-lg text-center  font-semibold underline cursor-pointer">Forgotten Password</p>
          </div>
        </form>
      </div>
      <Link to="/login" onClick={ () => sessionStorage.clear()} className="mt-2 text-lg  font-semibold underline cursor-pointer">Chooose Another Email</Link>
    </section>
  )
}
