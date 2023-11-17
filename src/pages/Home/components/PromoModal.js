import { useFilter } from "../../../context/filterContext"

export const PromoModal = ({setPromoModal}) => {
    const { state, randomPromoCode} = useFilter()
    randomPromoCode()

  return (
    <div className="modalOverlay absolute top-0 left-0 h-[100%] w-[100%] overflow-hidden flex justify-center  z-50" id="promoModal" >
        <span className="relative mt-[200px] h-[500px] w-[900px] font-Inconsolata bg-red-700">
            <div onClick={() => setPromoModal(false)} className="absolute top-2 right-5 text-2xl text-red-500 bi bi-x-circle-fill hover:cursor-pointer"></div>
            <div className="promoOverlay px-4 h-[100%] w-[100%] text-gray-200 flex flex-col justify-center  items-center z-20">
                <h1 className="text-4xl font-Bebas my-2">Welcome To The Rudiments</h1>
                <p className="text-xl font-semibold">Thank you for visiting the site and becoming a member of the Rudiments community; as a token of apperciation use the  promo-code below for a 20% discount on your first order!</p>
                <p className="text-3xl font-Bebas">CODE: "{state.promo}"</p>
            </div>
        </span>
    </div>
  )
}
