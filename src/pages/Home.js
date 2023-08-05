import { Carousel } from "../components/Carousel"
import { NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <section className="">
      <Carousel />
      {/* Collection Buttons */}
      <aside className="w-full grid max-mobile:grid-cols-2 mobile:max-tablet:grid-cols-2 tablet:grid-cols-3">
        <NavLink to="/t-shirt">
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px]  mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonOne">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end"> T-Shirts</span>
          </button>
        </NavLink>
        <NavLink to="/shirt">
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px] mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonTwo">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shirts</span>
          </button>
        </NavLink>
        <NavLink to="/pants">
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px]  mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonThree">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Pants</span>
          </button>
        </NavLink>
        <NavLink to="/shorts">
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px]  mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonFour">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shorts</span>
          </button>
        </NavLink>
        <NavLink to="/shoes">
          <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px] mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonFive">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Shoes</span>
          </button>
        </NavLink>
        <NavLink to="/accessories">
          <button className="bg-red-500 border-2 border-slate-200  flex justify-center w-[100%] max-mobile:h-[250px] mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id="buttonSix">
            <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">Accessories</span>
          </button>
        </NavLink>
      </aside>
    </section>
  )
}
