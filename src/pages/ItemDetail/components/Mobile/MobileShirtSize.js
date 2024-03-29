import { shirtSizes } from "../../../../components/DataStructures/SizeArrays"

export const MobileShirtSize = ({setSelectSize}) => {
  return (
    <aside className="my-4 flex justify-center">
      <ul className="flex flex-row  text-sm">
      {shirtSizes.map( (item, index) => (
        <li key={index}>
          <button onClick={(e)=> {setSelectSize(e.target.textContent)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 active:text-yellow-300 ">{item}</button>
        </li>
      ))}
      </ul>
  </aside>
  )
}
