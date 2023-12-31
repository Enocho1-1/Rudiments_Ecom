import { useNavigate } from "react-router-dom"


export const RecentPurchaseCard = ({item}) => {
    const {userCart, userInfo} = item
    const {orderNo, orderDate} = userInfo
    const  navigate = useNavigate()
    const User_Cart = userCart.slice(0,1)
    const orderDetails = [{title:"Ordered on:", value:orderDate}, {title:"Order no:", value:orderNo},{title:"Status:", value:"Despatched"}]
  return (
    <span className="relative mt-2 bg-gray-200 flex border-2 border-black">
        {User_Cart.map( (item,index) => (
            <img key={index} src={item.image} className="h-[175px] w-[175px]" alt="" />
        ))}
        <div className="  w-fit flex items-center max-[1085px]:flex-col max-[1085px]:justify-center">
            {orderDetails.map((item,index) => (
                <span key={index} className="mx-4 flex flex-col text-md max-mobile:text-sm max-[1100px]:items-center">
                    <h1 className="">{item.title}</h1>
                    <strong><p className="">{item.value}</p></strong>
                </span>
            ))}
        </div>
        <span onClick={() => navigate("/myaccount/order-details",{state:{data:item}})} className="absolute top-[50%] right-[5%] ml-6 text-sm   font-semibold underline cursor-pointer hover:text-black">View</span>
    </span>
  )
}
