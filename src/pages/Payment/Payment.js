import { useFilter } from "../../context/filterContext"
import{ MyBag } from "../Delivery/components/MyBag"

export const Payment = () => {
    const { retrieveUserInfo } = useFilter()
    const { firstName,lastName,title } = retrieveUserInfo()
  return (
    <section>
        <div className="mt-[4.688rem] flex justify-center">
            <aside className="min-w-[43.75rem] max-tablet:min-w-[31.25rem] flex flex-col p-4 border border-gray-200">
                    <h1 className="m-auto mb-4 text-2xl font-Inconsolata font-light">Review & pay</h1>
                    <div className="flex flex-col">
                        <span className="font-Inconsolata border border-gray-200 rounded-sm p-4">
                            <>
                                <h1 className="text-lg font-Inconsolata font-light">Delivery address</h1>
                                <p className="my-2 text-lg">{title}. {firstName} {lastName}</p>
                                <p className="my-2 text-lg ">929 W. Creekside Road,Campbell, CA, 95008</p>
                            </>
                            <>
                                <h1 className="mt-6 text-lg font-Inconsolata font-light">Delivery Option</h1>
                                <p className="my-2 text-lg">Standard delivery</p>
                                <p className="my-2 text-lg ">Delivered by Friday 1st December</p>
                            </>
                        </span>
                    </div>
                   
                    {/* <button onClick={() => navigate("/checkout/payment")} className="m-auto min-w-[200px]  bg-blk p-2  text-xl text-white font-Bebas mt-4">NEXT STEP</button> */}
            </aside>
            <MyBag/>
        </div>
      
    </section>
  )
}
