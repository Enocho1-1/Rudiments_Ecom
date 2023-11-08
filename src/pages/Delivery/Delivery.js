import { useFilter } from "../../context/filterContext"

export const Delivery = () => {
    const { retrieveUserInfo } = useFilter()
    const { firstName,lastName,title } = retrieveUserInfo()
  return (
    <section className="flex justify-center items-center">
    
        <div className="mt-[4.688rem] min-w-[34.375rem]  flex flex-col p-4 border border-gray-200">
            <h1 className="m-auto mb-4 text-xl font-Inconsolata font-light">Please confirm your address</h1>
            <span className="border border-gray-200 rounded-sm p-4">
                <p className="my-2 text-lg font-Inconsolata">{title}. {firstName} {lastName}</p>
                <p className="my-2 text-lg font-Inconsolata">929 W. Creekside Road</p>
                <p className="my-2 text-lg font-Inconsolata">Campbell, CA</p>
                <p className="my-2 text-lg font-Inconsolata"> 95008</p>
                <p className="my-2 text-lg font-Inconsolata"> US</p>
                <p className="my-2 text-lg font-Inconsolata"> Tel: (689) 472-2872</p>
            </span>
            <button className="m-auto min-w-[200px]  bg-blk p-2  text-xl text-white font-Bebas mt-4">NEXT STEP</button>
        </div>
    </section>
  )
}
