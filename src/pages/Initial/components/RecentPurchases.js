import { RecentPurchaseCard } from "./RecentPurchaseCard"

export const RecentPurchases = ({userData}) => {


  return (
    <div className=' font-Inconsolata mt-4 w-inherit flex flex-col'>
      { userData.map( (item,index) => (
        <RecentPurchaseCard key={index} item={item} />
      ))}
    </div>
  )
}
