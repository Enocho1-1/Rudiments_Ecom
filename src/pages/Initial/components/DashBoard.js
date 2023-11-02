import { Link } from "react-router-dom"

export const DashBoard = () => {
  return (
    <>
        <Link to="/login" onClick={() => sessionStorage.clear()}>Sign Out</Link>
    </>
  )
}
