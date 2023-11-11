import { useTitle } from "../../hooks/useTitle"
import { HomeCarousel } from "../../components"
import { NavLink } from "react-router-dom"

export const Home = ({title}) => {

  useTitle(title)

  const pieceButtons = [
    {
      name:"T-Shirts",
      link:"/t-shirt",
      id:"buttonOne"
    },
    {
      name:"Shirts",
      link:"/shirt",
      id:"buttonTwo"
    },
    {
      name:"Pants",
      link:"/pants",
      id:"buttonThree"
    },
    {
      name:"Shorts",
      link:"/shorts",
      id:"buttonFour"
    },
    {
      name:"Shoes",
      link:"/shoes",
      id:"buttonFive"
    },
    {
      name:"Accessories",
      link:"/accessories",
      id:"buttonSix"
    }
  ]
  return (
    <section className=" my-6">
      <HomeCarousel/>
      {/* Collection Buttons */}
      <aside className="w-full grid max-mobile:grid-cols-2 mobile:max-tablet:grid-cols-2 tablet:grid-cols-3">
        { pieceButtons.map( (item, index) => (
           <NavLink key={index} to={item.link} className="hover:text-slate-500">
            <button className="bg-red-500 border-2 border-slate-200 flex justify-center w-[100%] max-mobile:h-[250px]  mobile:max-tablet:h-[350px] tablet:max-laptop:h-[450px] laptop:h-[620px]" id={item.id}>
              <span className=" bg-white h-10 my-4 p-2 rounded font-light font-Bebas text-xl self-end">{item.name}</span>
            </button>
          </NavLink>
        ))}
      </aside>
    </section>
  )
}
