

export const MobileShirtSize = ({array, setSelectSize}) => {
  return (
    <aside className="my-4 flex justify-center">
      <ul className="flex flex-row  text-sm">
      {array.map( (item, index) => (
        <li key={index}>
          <button onClick={(e)=> {setSelectSize(e.target.textContent)}} className=" shirtSize flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{item}</button>
        </li>
      ))}
      </ul>
  </aside>
  )
}
