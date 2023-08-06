

export const Pagination = ({totalAmount,postsPerPage, paginate}) => {

  const pageArray = []

  for(let i = 1; i <= Math.ceil(totalAmount/postsPerPage); i++){
    pageArray.push(i)
  }
  return (
    <>
    <nav aria-label="Page navigation example" className="mt-6 flex justify-center">
      <ul class="inline-flex -space-x-px text-sm">
        { pageArray.map( number => (
            <li key={number}>
            <button onClick={() => paginate(number)} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-500"><a href="#">{number}</a></button>
          </li>
        ))}
      
      </ul>
    </nav>

    </>
  )
}