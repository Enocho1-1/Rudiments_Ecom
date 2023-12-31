import { Link } from "react-router-dom"

export const OrderSuccess = ({data}) => {
  const { name, email,orderNo } = data.userInfo
  let randomNum 

  const randomNumGenerator = () => {
    randomNum = Math.floor(Math.random() * 75000)
  }

  randomNumGenerator()

  return (
    <div className="font-Inconsolata text-xl text-center max-w-4xl mx-auto my-10 py-5 rounded">
      <div className="my-5">
          <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
          <p>Thank you {name} for your order!</p>
          <p>Your Order No:{orderNo}</p>          
      </div>
      <div className="my-5">
          <p>Your order is confirmed.</p>
          <p>Please check your mail ({email}) for the confirmation letter.</p>
          <p className="my-5">Payment ID: xyz_{randomNum}</p>
      </div>
      <Link to="/shop" type="button" className="text-xl font-Inconsolata mt-4 underline underline-offset-1 hover:text-slate-500">Continue Shopping </Link>
  </div>
  )
}
