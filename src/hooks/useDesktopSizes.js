/* eslint-disable */
import { useState } from "react"
import { DesktopShirtSize,DesktopSizes} from "../pages/ItemDetail/components"

export const useDesktopSizes = (category) => {
    const [selectSize, setSelectSize] = useState("")

        if(category === "t-shirt" || category === "shirt" ){
            return <DesktopShirtSize setSelectSize={setSelectSize}/>
        } else if(category === "pants"|| category === "shorts" ){
            return < DesktopSizes category={category}  selectSize={selectSize} setSelectSize={setSelectSize}/>
        } else{
            return <div></div>
        }
   
  
}
