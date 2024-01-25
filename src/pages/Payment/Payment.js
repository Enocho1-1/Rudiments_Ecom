import { useFilter } from "../../context/filterContext"
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { postUserOrder } from "../../utility"
import { clearCart } from "../../store/CartSlice"
import { MyBag } from "../Delivery/components/MyBag"
import { months } from "../../components/DataStructures/MonthsArray"
import visa from "../../assests/visa.png"
import mastercard from "../../assests/mastercard.png"
import americanexpress from "../../assests/american-express.png"
import paypal from "../../assests/paypal.png"

export const Payment = () => {
    const { state, retrieveUserInfo } = useFilter()
    const { firstName,lastName,title,userEmail,userID,userToken } = retrieveUserInfo()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)
    const date = new Date(),
          month = months[date.getMonth()],
          day = date.getDate(),
          year = date.getFullYear(),
          time = date.toLocaleTimeString()

    const userOrder = {
        userCart: cart,
        userInfo:{
            name:`${title}. ${firstName} ${lastName}`,
            email:userEmail,
            orderNo: Math.floor(Math.random() * 12000000),
            orderDate : `${day} ${month} ${year}`,
            orderTime:time,
            orderTotal:state.discount_price ? state.discount_price : total,
            id:userID
        } 
    }

    const options = {
        method:"POST",
        headers:{'Content-Type':'application/json',Authorization: `Bearer ${userToken}`},
        body:JSON.stringify(userOrder)
    }
        
    
    const handleSubmitOrder = () => {
        postUserOrder(options,navigate)
        dispatch(clearCart())
        localStorage.clear()
        sessionStorage.removeItem("promoCode")
        state.discount_price = null
    }
  return (
    <section className="font-Inconsolata">
        <div className="mt-[4.688rem] flex justify-center">
            <aside className="min-w-[43.75rem] max-tablet:min-w-[31.25rem] flex flex-col py-4 px-[4.688rem] border border-gray-200">
                    <h1 className="m-auto mb-4 text-2xl  font-light">Review & pay</h1>
                    <div className="flex flex-col">
                        <span className=" border border-gray-200 rounded-sm p-4">
                            <>
                                <h1 className="text-lg  font-light">Delivery address</h1>
                                <p className="my-2 text-lg">{title}. {firstName} {lastName}</p>
                                <p className="my-2 text-lg ">929 W. Creekside Road,Campbell, CA, 95008</p>
                            </>
                            <>
                                <h1 className="mt-6 text-lg  font-light">Delivery Option</h1>
                                <p className="my-2 text-lg">Standard delivery</p>
                                <p className="my-2 text-lg ">Delivered by Friday 1st December</p>
                            </>
                        </span>
                    </div>
                    
                    <>
                        <h1 className="my-4 text-2xl font-semibold ">Billing address</h1>
                        <span className=" flex border border-gray-200 rounded-sm p-4 w-full">
                            <input className="h-8 w-8" type="checkbox" name="" defaultChecked />
                            <label  className="ml-3  text-lg font-medium">Same as billing address</label>
                        </span>
                    </>

                    <>
                        <h1 className="my-4 text-2xl font-semibold ">Gift card</h1>
                        <span className=" font-bold flex  border border-gray-200 rounded-sm p-4 w-full">
                            <span className="text-black text-3xl bi bi-plus"></span>
                            <p  className="ml-3 text-lg">Apply a gift card</p>
                        </span>
                     
                    </>

                    
                    <>
                        <h1 className="my-4 text-2xl font-semibold ">Payment Method</h1>
                        <span className=" font-bold flex flex-col  border-1 border-green-300 rounded-sm p-4 w-full">
                            <header className="flex justify-between">
                                <div className="flex">
                                    <span className="text-3xl text-green-300 bi bi-check-circle"></span>
                                    <p  className="ml-3 my-2 text-lg self-end">Pay by Card</p>
                                </div>
                                <div className="flex flex-row mt-2">
                                    {[visa,mastercard,americanexpress,paypal].map((image, index) => (
                                         <span  key={index} className="h-8 w-8 border border-slate-500 rounded-md mx-1">
                                            <img src={image} className="h-auto w-auto" alt="" />
                                        </span>
                                    ))}
                                </div>
                            </header>

                            <div className="flex flex-col mt-4">
                                <input className="border border-gray-300 py-3 px-3 w-[17.188rem] text-gray-300" type="text" value="4215 6254 6259 7845" disabled />
                                <input className="mt-4 border border-gray-300 py-3 px-3 w-[17.188rem] text-gray-300" type="text" value="08/27" disabled />
                                <input className="mt-4 border border-gray-300 py-3 px-2 w-[6rem] text-gray-300"  value="654" type="text" disabled />
                            </div>
                            <div className="mt-4 flex">
                                <input className="h-6 w-6" type="checkbox" name="" defaultChecked />
                                <label  className="ml-3  text-xs self-end font-medium">Save card for faster future purchases</label>
                            </div>
                       
                        </span>
                    </>
                    
                    <div className="mt-3 flex flex-col justify-center">
                        <p className="text-md text-center">You may be asked for further identification by your card issuer.</p>
                        <span className="mt-3 flex justify-center">
                            {[visa,mastercard].map((image,index) => (
                                <span key={index} className="h-6 w-6 border border-slate-500 rounded-md mx-2">
                                    <img src={image} className="h-auto w-auto" alt="" />
                                </span>
                            ))}
                        </span>
                        
                        <button onClick={() => handleSubmitOrder()}  className="m-auto min-w-[250px]  bg-yellow-200 py-3 px-2  text-lg text-black mt-4">CONFIRM ORDER</button>
                        <p className="mt-4 text-center text-sm">By confirming your order, you accept our <strong className="underline">Terms & Conditions.</strong></p>
                    </div>
            </aside>
            <MyBag/>
        </div>
      
    </section>
  )
}
