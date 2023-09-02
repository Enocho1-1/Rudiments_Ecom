
import { Trending } from "../DataArray/Trending"

export const TrendingSlider = () => {

  const TrendingArray = Trending

  // for(let i = 0; i < TrendingArray.length; i++){
  //   return console.log(TrendingArray[i])
  // }
  return (
      <div className="h-12 p-8 max-w-5xl mt-8">
        <header className="flex justify-between">
          <h1 className="font-Inconsolata text-2xl font-semibold self-center">Trending Products</h1>

          {/* Buttons */}
          <span className="btns flex ">
            <button className=" mr-2 flex justify-center items-center rounded-md">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button className=" flex justify-center items-center rounded-md">
              <i class="bi bi-arrow-right"></i>
            </button>
          </span>
        </header>
        

        {/* Trending Products */}
      </div>
  )
}
