
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Trending } from "../DataArray/Trending"

export const TrendingSlider = () => {

  const TrendingArray = Trending

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  // const productPage = (id) => {
  //   navigate(`/${id}`)
  // }
  // for(let i = 0; i < TrendingArray.length; i++){
  //   return console.log(TrendingArray[i])
  // }
  return (
      <div className="h-36 p-8 max-w-5xl mt-8">
        <header className="flex justify-between">
          <h1 className="font-Inconsolata text-2xl font-semibold self-center">Trending Products</h1>

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
        <div className="mt-2 row-container" id="slider">
          { TrendingArray.map( (item, index) => (
              <div key={index} className="row-item">
                <span>
                  <Link to={`/${item.id}`}>
                   <img src={item.imageUrl} className="h-72 w-fit" alt="" />
                  </Link>
            
                </span>
                <span className="px-6">
                  <h1 className="font-Inconsolata text-lg">{item.title}</h1>
                  <h1 className="font-Inconsolata text-lg font-semibold">${item.price}.00</h1>
                </span>
         
              </div>
          ))}
        
        </div>
      </div>
  )
}


