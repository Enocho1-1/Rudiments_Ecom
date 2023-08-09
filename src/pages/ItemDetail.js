import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "../components"
import "./ItemDetail.css"

export const ItemDetail = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [size, setSize] = useState(false)
  const [hidden, setHidden] = useState(true)
  const param = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        setLoading(true)
        const response = await fetch(`https://api.mocki.io/v2/f3308aac/items/${param.id}`)
        const result = await response.json()
        setData(result)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    fetchProducts();
  },[param.id])

 const { title , price, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data
 let stringArray
 const productitle = (string) => {
   stringArray = string.split(' ')
 }


  useEffect(() => { 
    if(title){
    productitle(title)
    stringArray.includes("Tee") || stringArray.includes( "Button") || stringArray.includes("Shirt") ? setSize(true) : setSize(false)
  } else {
    console.log('no title')
  }
  })


 const mobileView = "flex flex-col"
  return (
    <section>
      {loading && <Loading/>}
      <aside className={window.innerWidth < 769 ? mobileView : "flex flex-row justify-evenly"}>
        {window.innerWidth < 769 
        ? 
        // Responsive Design range:0px - 769px
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
                {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
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
            <aside className="flex flex-col">
                {/* Sizes */}
                { size 
              ? 
              ( 
              <aside className="my-4 flex justify-center">
                <ul class="flex flex-row  text-sm">
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXS</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XS</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">S</button>
                    </li>
                    <li>
                      <button className="fleX items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">M</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">L</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXL</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXXL</button>
                    </li>
                </ul>
              </aside>
            ) 
              :
              (
               <aside className="">
                  <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg></button>
                   {/* Dropdwon */}
                    <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">28(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">29(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">30(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">31(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">32(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">33(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">34(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">35(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">36(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">37(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">38(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">39(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">40(US)</a>
                          </li>
                        </ul>
                    </div>
               </aside> 
              )
              }
            </aside>
          </div>
          </>
          
      ) 
      : 
      (
        <>
            {/* Product Images */}
            <div className="grid grid-cols-2 grid-rows-2 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows tablet:max-laptop:w-[50%] individualImg">
              <img src={imageUrl} className=" w-full " alt="..."/>
              <img src={imageUrl_Two} className="w-full " alt="..."/>
              <img src={imageUrl_Three} className=" w-full " alt="..."/>
              {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
            </div>

            {/* Product Info */}
            <div className="flex flex-col tablet:max-laptop:w-[50%] laptop:w-[30%]">
              <aside className="mt-12 px-6">
                <h1 className=" font-Inconsolata text-3xl">{title}</h1>
                <p className="font-normal mt-2 text-2xl">{price}</p>
              </aside>

              {/* Sizes */}
              { size 
              ? 
              ( 
              <aside className="my-4 flex justify-center">
                <ul class="flex flex-row  text-sm">
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXS</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XS</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">S</button>
                    </li>
                    <li>
                      <button className="fleX items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">M</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">L</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXL</button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">XXXL</button>
                    </li>
                </ul>
              </aside>
            ) 
              :
              (
               <aside className="">
                  <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mt-4 mx-2 text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg></button>
                   {/* Dropdwon */}
                    <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">28(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">29(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">30(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">31(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">32(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">33(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">34(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">35(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">36(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">37(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">38(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">39(US)</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">40(US)</a>
                          </li>
                        </ul>
                    </div>
               </aside> 
              )
              }
             
              <hr />
            </div>
        </>
      )}
     
       
      </aside>
    </section>
  )
}
