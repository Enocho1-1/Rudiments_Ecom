import { useState, useEffect } from "react"

export const FilterMenu = ({name, array}) => {
  const [isHidden, setIsHidden] = useState(true)
  const [count, setCount] = useState([])

  const filterItem = new Map()


  // useEffect(() => {
  //   try{
  //     async function fetchFilter(name){
  //       const response = await fetch (`https://api.mocki.io/v2/f3308aac/${name}`)
  //       const result = await response.json()
  //       setCount(result.length)
  //       filterItem.set(`${name}`, `${count}`)
  //     }
  //       fetchFilter("shoes")
  //   } catch(error){
  //     console.log(error.message)
  //   }
  // },[])

  // fetchFilter("shoes")
  // console.log(filterItem)
  
  return (
    <>
      <div className="">
        <span>
            <button id="dropdownHoverButton" onClick={() => setIsHidden(!isHidden)} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white text-2xl font-Bebas px-5 py-2.5 text-center inline-flex items-center " type="button">{name}<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg></button>

            <div id="dropdownHover" className={isHidden ? "z-20 hidden relative bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "z-20 relative divide-y divide-gray-100 rounded-lg shadow w-44"}>
                <ul className="py-2 text-2xl text-black font-Bebas absolute bg-white" aria-labelledby="dropdownHoverButton">
                  { array.map((item, index) => (
                      <li key={index}>
                        <a href="#" className="block text-center px-4 py-2 hover:text-white dark:hover:bg-gray-600">{item}</a>
                      </li>
                  ))}
                
                </ul>
            </div>
        </span>

      </div>
    </>
  )
}
