import { shirtSizes } from "../../../../components/DataStructures/SizeArrays"

export const DesktopShirtSize = ({setSelectSize}) => {
  return (
    <aside className="my-4 flex">
      <ul className=" flex flex-row  text-sm ">
        { shirtSizes.map( (item, index) => (
        <li key={index}>
          <button onClick={(e)=> {setSelectSize(e.target.textContent)}} className=" shirtSize flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border-1 border-gray-300 active:text-yellow-300  ">{item}</button>
        </li>
        ))}
      </ul>
  </aside>
  )
}
