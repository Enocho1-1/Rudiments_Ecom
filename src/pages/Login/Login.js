

export const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("click")
  }
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="mt-[75px] mb-4 text-3xl font-Inconsolata font-light">MY ACCOUNT</h1>
      <div className=" p-4 bg-slate-300 rounded-sm flex flex-col items-center">
        <h1 className="my-2 text-2xl font-Bebas text-blk">What's You Email?</h1>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl font-Inconsolata font-medium text-blk">Email Address</label>
            <input type="email" className="px-6 py-2" required/>
            <button type="submit" className="bg-blk p-2  text-xl text-white font-Bebas mt-4">Continue</button>
          </div>
        </form>
        <p className=" mt-3 max-w-[300px] text-center font-Inconsolata text-sm">If you don't have an account with us yet, you will be asked to create one</p>
      </div>
    </section>
  )
}
