import { MobileShirtSize,MobileSizes } from "../pages/ItemDetail"

export const useMobileSizes = (category,selectSize,setSelectSize) => {

    if(category === "t-shirt" || category === "shirt" ){
        return <MobileShirtSize setSelectSize={setSelectSize}/>
    } else if(category === "pants"|| category === "shorts" || category === "shoes"){
        return <MobileSizes  category={category}  selectSize={selectSize} setSelectSize={setSelectSize}/>
    } else{
        return <div></div>
    }

 
}
