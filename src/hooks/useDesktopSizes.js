/* eslint-disable */
import { DesktopShirtSize,DesktopSizes} from "../pages/ItemDetail"

export const useDesktopSizes = (category,selectSize,setSelectSize) => {

        if(category === "t-shirt" || category === "shirt" ){
            return <DesktopShirtSize setSelectSize={setSelectSize}/>
        } else if(category === "pants"|| category === "shorts" || category === "shoes" ){
            return <DesktopSizes category={category}  selectSize={selectSize} setSelectSize={setSelectSize}/>
        } else{
            return <div></div>
        }

}
