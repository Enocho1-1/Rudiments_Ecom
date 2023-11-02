
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../../utility"
import { EmailValidation,DashBoard } from "./components"


export const Initial = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const userToken = JSON.parse(sessionStorage.getItem("userToken"))
    useEffect(()=>{ fetchUsers(setData)},[])
  
    const handleLogin = (e) => {
        e.preventDefault()
        const userEmail = e.target.email.value
        const userValidation = data.find(item => item.email === userEmail)
        sessionStorage.setItem("userEmail", JSON.stringify(userEmail))
        e.target.reset()
        userValidation ? navigate("/login/password") : navigate("/register")
      }

  return (
    <section className="flex flex-col justify-center items-center">
        { userToken ? <DashBoard/> : <EmailValidation handleLogin={handleLogin} />}
    </section>
  )
}
