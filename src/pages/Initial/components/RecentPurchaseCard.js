import { Link } from "react-router-dom"

export const RecentPurchaseCard = ({item}) => {
    const {userCart, userInfo} = item
    const {orderNo, orderDate} = userInfo
    const User_Cart = userCart.slice(0,1)
    const orderDetails = [{title:"Ordered on:", value:orderDate}, {title:"Order no:", value:orderNo},{title:"Status:", value:"Despatched"}]
  return (
    <span className="relative mt-2 bg-slate-200 flex border-2 border-black">
        {User_Cart.map( (item,index) => (
            <img key={index} src={item.image} className="h-[175px] w-[175px]" alt="" />
        ))}
        <div className=" ml-[25px] w-fit flex items-center max-[1085px]:flex-col max-[1085px]:justify-center">
            {orderDetails.map((item,index) => (
                <span key={index} className="mx-4 flex flex-col max-[1100px]:flex-row max-[1100px]:items-center">
                    <h1 className="text-md">{item.title}</h1>
                    <strong><p className="text-md">{item.value}</p></strong>
                </span>
            ))}
        </div>
        <Link to="" className="absolute top-[50%] right-[5%] ml-6 text-sm   font-semibold underline cursor-pointer hover:text-black">View</Link>
    </span>
  )
}
