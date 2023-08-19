

export const Pagination = ({totalAmount,postsPerPage, paginate}) => {

  function scrollTop(){
    window.scrollTo(0,10);
  }
 
  const pageArray = []

  for(let i = 1; i <= Math.ceil(totalAmount/postsPerPage); i++){
    pageArray.push(i)
  }


  return (
    <>
    <nav aria-label="Page navigation example" className="mt-6 flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        { pageArray.map( number => (
<<<<<<< HEAD
            <li key={number} onClick={() => scrollTop()}>
              <button onClick={() => {paginate(number); scrollTop()}} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-500">{number}</button>
=======
            <li key={number}>
              <button onClick={() => {paginate(number); scrollTop()}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-500 active:bg-slate-800">{number}</button>
>>>>>>> f4b2c2881e183391dd632a4668a5ac9746ce14d4
            </li>
        ))}
      
      </ul>
    </nav>

    </>
  )
}
