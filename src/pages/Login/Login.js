import { Link,useNavigate } from "react-router-dom"
import { loginUser } from "../../utility"
import reCaptha from "../../assests/RecaptchaLogo.svg.png"

export const Login = () => {

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

    // Login in User
    loginUser(options)
    navigate("/shop")

    e.target.reset()
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="mt-[75px] mb-4 text-3xl font-Inconsolata font-light">SIGN IN</h1>
      <div className=" p-4 bg-slate-300 rounded-sm flex flex-col items-center">
        <h1 className="my-2 text-2xl font-Bebas text-blk">{userEmail}</h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl font-Inconsolata font-medium text-blk">Password</label>
            <input type="password" name="password" className="px-6 py-2" required/>
            <span className="bg-gray-100 flex justify-between rounded-sm mt-2 px-2 py-3 ">
              <div className="flex items-center">
                <input type="checkbox" className="p-2" required/>
                <p className="font-Inconsolata text-sm mx-2">I'm not a robot</p>
              </div>
              <img src={reCaptha} className="h-[35px] w-[35px]" alt="" />
            </span>
            <button type="submit" className="bg-blk p-2  text-xl text-white font-Bebas mt-4">Sign In</button>
            <p className="mt-2 text-lg text-center font-Inconsolata font-semibold underline cursor-pointer">Forgotten Password</p>
          </div>
        </form>
      </div>
      <Link to="/login" className="mt-2 text-lg font-Inconsolata font-semibold underline cursor-pointer">Chooose Another Email</Link>
    </section>
  )
}
