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
            <div key={index} className="row-item">
                <span>
                <Link to={`/${item.id}`}>
                <img src={item.imageUrl} className="" alt="" />
                </Link>
                </span>
                <span className="mt-2">
                <h1 className="font-Inconsolata font-semibold p-2">{item.title}</h1>
                <h1 className="font-Inconsolata text-lg font-semibold p-2">${item.price}.00</h1>
                </span>
        
            </div>
        ))}
        
        </div>
  </div>
  )
}
