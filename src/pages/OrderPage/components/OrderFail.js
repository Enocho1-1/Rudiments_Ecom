import { Link } from "react-router-dom"

export const OrderFail = () => {
  return (
    <div className="font-Inconsolata text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
      <div className="my-5">
          <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
          <p>Payment failed, please try again!</p>     
      </div>
      <div className="my-5">
          <p>Your order is not confirmed.</p>
      </div>
      <Link to="/cart" type="button" className="text-xl font-Inconsolata mt-4 underline underline-offset-1 hover:text-slate-500">Check Cart Again</Link>
  </div>
  )
}
