/* eslint-disable */
import { useState } from "react"
import { useClearSize } from "../../../../hooks"
import { pantSizes,shoeSizes } from "../../../../components/DataStructures/SizeArrays"

export const MobileSizes = ({category,selectSize, setSelectSize}) => {
  const [hidden, setHidden] = useState(true)
  const sizeArray = category === "pants"|| category === "shorts" ? pantSizes : shoeSizes
  // Clear Size Dropdown Hook
  useClearSize(setSelectSize)
  return (
    <aside className=" mt-2 self-center">
      <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{selectSize ? selectSize : "Select Size"} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
      </button>
      {/* Dropdwon */}
        <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
              { sizeArray.map((item, index) => (
                  <li onClick={(e) => {setSelectSize(e.target.textContent); setHidden(!hidden)}} key={index}>
                    <a href="# " className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                  </li>
              ))}
            </ul>
        </div>
    </aside>
  )
}
