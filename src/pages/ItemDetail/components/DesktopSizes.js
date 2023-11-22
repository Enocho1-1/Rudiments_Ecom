import { useState } from "react"

export const DesktopSizes = ({array, selectSize, setSelectSize}) => {
  const [hidden, setHidden] = useState(true)
  return (
    <aside>
      <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mt-4 mx-2 text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{selectSize ? selectSize : "Select Size"} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg></button>
      {/* Dropdwon */}
        <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
            <ul className=" py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
            { array.map((item, index) => (
                      <li onClick={(e) => {setSelectSize(e.target.textContent); setHidden(!hidden)}} key={index}>
                     {   /* eslint-disable */}
                        <span   className="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">{item}</span>
                      </li>
                  ))}
            </ul>
        </div>
  </aside> 
  )
}
