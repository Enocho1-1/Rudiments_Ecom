import { Link } from "react-router-dom"

export const TrendingSlider = ({array}) => {


    const slideLeft = () => {
      let slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 300;
    };
  
    const slideRight = () => {
      let slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft + 300;
    };
  
  
  return (
    <div className="h-36 p-8 max-[1690px]:w-full min-[1690px]:max-w-7xl my-8">
        <header className="flex justify-between px-4">
        <h1 className="font-Bebas text-3xl font-semibold self-center">Trending Now</h1>

        {/* Buttons */}
        <span className="btns flex ">
            <button className=" flex justify-center items-center rounded-md left" onClick={slideLeft}> 
            <i className="bi bi-arrow-left"></i>
            </button>
            <button className=" flex justify-center items-center rounded-md right" onClick={slideRight}>
            <i className="bi bi-arrow-right"></i>
            </button>
        </span>
        </header>
        

        {/* Trending Products */}
        <div className="mt-2 px-3 row-container" id="slider">
        { array.map( (item, index) => (
              <div key={index}  className="bg-white border border-gray-200 rounded-lg shadow">
                  <Link to={`/ALL_Products/${item.id}`}>
                      <img className="rounded-t-lg h-72 min-w-[250px]" src={item.imageUrl} alt={item.title} />
                  </Link>
                  <div className="p-2">
                      <Link to={`/${item.id}`}>
                          <h5 className="max-w-xs mb-2 text-xl font-Bebas tracking-tight text-gray-900 truncate">{item.title}</h5>
                      </Link>
                      <p className="mb-3 font-normal  text-gray-700">${item.price}.00</p>
                  </div>
              </div>

        ))}
        
        </div>
  </div>
  )
}
