

export const NotFound = ({queryItem}) => {
  return (
   
      <div className="max-w-3xl m-auto flex flex-col px-4">
        <h1 className="text-xl font-Inconsolata">Sorry, we can't seem to find any results for <p className="text-xl font-Inconsolata inline-block font-semibold">{queryItem}</p>!</h1>
        <h1 className="mt-2 text-2xl font-Inconsolata font-semibold">Search suggestions</h1>
        <ul className="mt-2 list-disc px-4">
          <li className="text-xl font-Inconsolata">Check the spelling</li>
          <li className="text-xl font-Inconsolata">Try describing what you're looking for in a different way</li>
          <li className="text-xl font-Inconsolata">Try entering more general words, for example "shoes"</li>
        </ul>

        <h1 className="mt-2 text-2xl font-Inconsolata font-semibold">Top Searches</h1>
        <ol className="mt-2 list-decimal px-4">
          <li className="text-xl font-Inconsolata">Shoes</li>
          <li className="text-xl font-Inconsolata">Shirts</li>
          <li className="text-xl font-Inconsolata">Jeans</li>
          <li className="text-xl font-Inconsolata">Trousers</li>
          <li className="text-xl font-Inconsolata">Shorts</li>
          <li className="text-xl font-Inconsolata">Cargos</li>
          <li className="text-xl font-Inconsolata">Bags</li>
          <li className="text-xl font-Inconsolata">Watches</li>
          <li className="text-xl font-Inconsolata">Glasses</li>
          <li className="text-xl font-Inconsolata">Graphic</li>
        </ol>
      </div>
   
  )
}
