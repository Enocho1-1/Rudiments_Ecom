import { Carousel } from "../components/Carousel"
import { Link, NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <section className="relative">
      <Carousel />
      {/* Collection Buttons */}
      <aside className="w-full grid max-mobile:grid-cols-2 mobile:max-tablet:grid-cols-2">
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonOne">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end"> T-Shirts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonTwo">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shirts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonThree">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Pants</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonFour">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shorts</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonFive">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shoes</span>
          </button>
        </NavLink>
        <NavLink>
          <button className="bg-red-500 border-2 border-slate-200  flex justify-center max-mobile:w-[100%] max-mobile:h-[250px] mobile:max-tablet:w-[100%] mobile:max-tablet:h-[350px]" id="buttonSix">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Accessories</span>
          </button>
        </NavLink>
      </aside>
    </section>
  )
}
