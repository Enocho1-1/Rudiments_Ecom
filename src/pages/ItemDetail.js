import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetail.css"

export const ItemDetail = () => {
  const [data, setData] = useState([])
  const param = useParams()
  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const response = await fetch(`https://api.mocki.io/v2/f3308aac/items/${param.id}`)
        const result = await response.json()
        setData(result)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[param.id])

 const { title , price, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data

 const mobileView = "flex flex-col"
  return (
    <section>
      <aside className={window.innerWidth < 769 ? mobileView : "flex flex-row justify-evenly"}>
        {window.innerWidth < 769 
        ? 
        // Mobile View
        (
          <> 
          <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner items-carousel">
              <div className="carousel-item active">
                <img src={imageUrl} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imageUrl_Two} className="block w-full" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imageUrl_Three} className="block w-full " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={imageUrl_Four} className="block w-full " alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="w-full">
            <aside className="flex justify-between p-3 mt-4">
              <h1 className=" font-Bebas text-2xl">{title}</h1>
              <p className="font-semibold text-xl">{price}</p>
            </aside>
            <hr />
            <aside className="flex flex-row justify-evenly"></aside>
          </div>
          </>
          
      ) 
      : 
      (
        <>
            <div className="grid grid-cols-2 grid-rows-2 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows w-full mt-4 individualImg">
              <img src={imageUrl} className=" w-full " alt="..."/>
              <img src={imageUrl_Two} className="w-full " alt="..."/>
              <img src={imageUrl_Three} className=" w-full " alt="..."/>
              <img src={imageUrl_Four} className="w-full " alt="..."/>
            </div>
            <div className="flex tablet:max-laptop:w-[75%] laptop:w-[30%]">
              <aside className="mt-12 tablet:desktop:ml-8">
                <h1 className=" font-Bebas text-3xl">{title}</h1>
                <p className="font-semibold text-2xl">{price}</p>
              </aside>
              <hr />
            </div>
        </>
      )}
     
       
      </aside>
    </section>
  )
}
