import { Carousel } from "../components/Carousel"
import { Link, NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <section className="relative">
      <Carousel />
      {/* Collection Buttons */}
      <aside className="mt-4 w-auto max-mobile:grid max-mobile:grid-cols-2  mobile:max-xl:grid mobile:max-xl:grid-rows-3 mobile:max-xl:grid-cols-2 tablet:flex tablet:flex-wrap tablet:justify-center">
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 h-[550px] w-fit max-mobile:h-[250px] max-mobile:w-[300px] mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonOne">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end"> T-Shirts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 h-[550px] w-[525px] max-mobile:h-[250px] max-mobile:w-[300px] mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonTwo">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shirts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 h-[550px] w-[525px] max-mobile:h-[250px] max-mobile:w-[300px] mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonThree">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Pants</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 h-[550px] w-[525px] max-mobile:h-[250px] max-mobile:w-[300px]  mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonFour">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shorts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 h-[550px] w-[525px] max-mobile:h-[250px] max-mobile:w-[300px] mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonFive">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shoes</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200   max-mobile:h-[250px] max-mobile:w-[300px] mobile:max-tablet:h-[450px] mobile:max-tablet:w-[400px] tablet:max-xl:h-[475px] tablet:max-xl:w-[360px] xl:h-[550px] xl:w-[525px] flex justify-center" id="buttonSix">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Accessories</span>
          </button>
        </NavLink>
      </aside>
    </section>
  )
}
