import { Link } from "react-router-dom"

export const Register = () => {

  return (
    <section className="flex flex-col my-2 items-center">
      <h1 className="mt-[75px] mb-4 text-3xl font-Inconsolata font-light">CREATE AN ACCOUNT</h1>
      <div className=" p-4 bg-slate-300 rounded-sm flex flex-col my-2 items-center">
        <h1 className="my-2 text-xl font-Bebas text-blk">MikeDoe@example.com</h1>
        <form >
        <div className="flex flex-col my-2 my-2">
            <label htmlFor="title" className="text-xl font-Inconsolata font-medium text-blk">Title</label>
            <select className="max-w-[150px]" name="title" >
              <option >Please Select</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs.</option>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
              <option value="Mx">Mx.</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="firstName" className="text-xl font-Inconsolata font-medium text-blk">First Name</label>
            <input type="firstName" className="px-6 py-2" required/>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="lastName" className="text-xl font-Inconsolata font-medium text-blk">Last Name</label>
            <input type="lastName" className="px-6 py-2" required/>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="password" className="text-xl font-Inconsolata font-medium text-blk">Password</label>
            <input type="password" className="px-6 py-2"  required/>
          </div>
          <div className="flex mt-2">
            <input type="checkbox" checked required/>
            <p className="max-w-[300px] ml-2 font-Inconsolata text-sm">Tick here to get the latest fashion news, exclusive discounts and updates from The Rudiments direct to your inbox.</p>
          </div>
        </form>
        <button type="submit" className=" bg-blk py-2 px-4  text-xl text-white font-Bebas mt-4">Create An Account</button>
      </div>
      <p className="mt-3 max-w-[320px] text-center font-Inconsolata text-sm">You must be 16 or over to shop with River Island. Your personal details are safe with us. For more info, read our <strong className="underline">Privacy Notice.</strong></p>
      <Link to="/login" className="mt-2 text-lg font-Inconsolata font-semibold underline cursor-pointer">Chooose Another Email</Link>
    </section>
  )
}
