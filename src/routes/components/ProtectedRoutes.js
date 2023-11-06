import { Navigate } from "react-router-dom"
import { useFilter } from "../../context/filterContext"

export const ProtectedRoutes = ({children}) => {

    const {retrieveUserInfo} = useFilter()
    const { userToken } = retrieveUserInfo()

  return  userToken ? children : <Navigate to="/login"/>
}
