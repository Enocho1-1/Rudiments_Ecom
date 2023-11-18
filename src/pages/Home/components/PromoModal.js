import { useFilter } from "../../../context/filterContext"

export const PromoModal = ({setPromodal}) => {
    const { state, randomPromoCode} = useFilter()

    // Generate Random Promo Code
    randomPromoCode()

    const handleClose = () => {
      sessionStorage.setItem("newUser",JSON.stringify(false))
      sessionStorage.setItem("promoCode",JSON.stringify(state.promo))
      setPromodal(false)
    }
  return (
    <div className="modalOverlay absolute top-0 left-0 h-[100vh] w-[100%] overflow-hidden flex items-center justify-center  z-50" id="promoModal" >
        <span className="relative h-[31.25rem] w-[56.25rem] max-mobile:w-[100%] font-Inconsolata bg-red-700">
            <div onClick={() => {handleClose()}} className="absolute top-2 right-5 text-2xl text-red-500 bi bi-x-circle-fill hover:cursor-pointer"></div>
            <div className="promoOverlay px-4 h-[100%] w-[100%] text-gray-200 flex flex-col justify-center  items-center z-20">
                <h1 className="text-4xl font-Bebas my-2">Welcome To The Rudiments</h1>
                <p className="text-xl font-semibold">Thank you for visiting the site and becoming a member of the Rudiments community; as a token of apperciation use the  promo-code below for a 20% discount on your first order!</p>
                <p className="text-3xl font-Bebas">CODE: "{state.promo}"</p>
            </div>
        </span>
    </div>
  )
}
