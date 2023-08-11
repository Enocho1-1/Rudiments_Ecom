import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../store/CartSlice"
import { Loading } from "../components"
import { shirtSizes, pantSizes, shoeSizes } from "../sizes/sizes"
import Logo from "../assests/cube.png"
import "./ItemDetail.css"

export const ItemDetail = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [shirt, setShirt] = useState(false)
  const [pants, setPants] = useState(false)
  const [shoes, setShoes] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [selectSize, setSelectSize] = useState("")
  const param = useParams()
  const dispatch = useDispatch()
  const mobileView = "flex flex-col"
  let stringArray

  
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

  // Destructure Returned JSON
 const {  title , price, imageUrl, imageUrl_Two, imageUrl_Three, imageUrl_Four} = data



//  Title Array function
 const productitle = (string) => {
   stringArray = string.split(' ')
 }

// Clothing Piece Validation
  useEffect(() => { 
    if(title){
    productitle(title)

    stringArray.includes("Tee") || stringArray.includes( "Button") || stringArray.includes("Shirt") ? 
    setShirt(true) : stringArray.includes("trousers") || stringArray.includes( "Joggers") || stringArray.includes("Jeans") ? 
    setPants(true) : stringArray.includes("Shoes") || stringArray.includes( "loafers") || stringArray.includes("trainers") ||     stringArray.includes("sandals") || stringArray.includes("sliders") ? setShoes(true) : console.log("done")
  } else {
    console.log('no title')
  }
  })

 


  return (
    <section>
      {loading && <Loading/>}
      <aside className={window.innerWidth < 769 ? mobileView : "flex flex-row"}>
        {window.innerWidth < 769 
        ? 
        // Responsive Design range:0px - 769px
        (
          <> 
          {/* Image Carousel  */}
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

                { 
                    // Shirt Size CSS
                    shirt ? 
                    ( 
                  <aside className="my-4 flex justify-center">
                    <ul className="flex flex-row  text-sm">
                    {shirtSizes.map( (item, index) => (
                      <li key={index}>
                        <button className=" shirtSize flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{item}</button>
                      </li>
                    ))}
                    </ul>
                  </aside>
                ) 
                  : 
                  // Pants Size CSS
                  pants ?
                  (
                  <aside className="">
                      <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                          </svg></button>
                      {/* Dropdwon */}
                        <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                              { pantSizes.map((item, index) => (
                                  <li key={index}>
                                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">    {item}</a>
                                   </li>
                              ))}
                            </ul>
                        </div>
                  </aside>

                  ): shoes ? 
                  (  
                  <aside className="">
                    <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                    {/* Dropdwon */}
                      <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
                          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                          { shoeSizes.map( (item, index) => (
                            <li key={index}>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                            </li>
                          ))}
                          </ul>
                      </div>
                  </aside>
              ) : (
              <div></div>
              )
              }
                    {/* Add To Cart */}
                    <button type="button" onClick={() => dispatch(addItemToCart(data))} className=" cart flex justify-center self-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-2 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
            </aside>
          </div>
          </>
          
      ) 
      : 
      (
        <>
            {/* Product Images */}
            <div className="grid grid-cols-2 grid-rows-2 px-4 tablet:max-laptop:grid-cols-gridCols tablet:max-laptop:grid-rows-gridRows tablet:max-laptop:w-[70%] desktop:w-[75%]  individualImg">
              <img src={imageUrl} className=" w-full " alt="..."/>
              <img src={imageUrl_Two} className="w-full " alt="..."/>
              <img src={imageUrl_Three} className=" w-full " alt="..."/>
              {imageUrl_Four ? ( <img src={imageUrl_Four} className="block w-full " alt="..."/>):(<div className="bg-white w-fit h-fit"></div>)}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <aside className="mt-12">
                <h1 className=" font-Inconsolata text-3xl">{title}</h1>
                <p className="font-normal mt-2 text-2xl">{price}</p>
              </aside>

              {/* Sizes */}
              { 
              shirt
              ? 
              ( 
              <aside className="my-4 flex">
                <ul className=" flex flex-row  text-sm ">
                  {shirtSizes.map( (item, index) => (
                  <li key={index}>
                    <button className=" shirtSize flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{item}</button>
                  </li>
                  ))}
                </ul>
              </aside>
            ) 
              : pants ?
              (
               <aside className="">
                  <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mt-4 mx-2 text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg></button>
                   {/* Dropdwon */}
                    <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
                        <ul className=" py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                        { pantSizes.map((item, index) => (
                                  <li key={index}>
                                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">    {item}</a>
                                   </li>
                              ))}
                        </ul>
                    </div>
               </aside> 
              ) : shoes ? 
              ( 
                <aside className="">
                <button onClick={() => setHidden(!hidden)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="mt-4 mx-2 text-black bg-white hover:bg-slate-800 border border-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Size <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                {/* Dropdwon */}
                  <div id="dropdownHover" className={ hidden ? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 h-[150px] overflow-y-scroll"}>
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                        { shoeSizes.map( (item, index) => (
                            <li key={index}>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                            </li>
                        ))}
                      </ul>
                  </div>
                </aside> 
           ) : (<div></div>)
              }

              {/* Add To Cart */}
              <button type="button" onClick={() => dispatch(addItemToCart(data))} className=" cart flex flew-row justify-center focus:outline-none text-black font-Bebas text-xl bg-yellow-400  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg w-[75%] p-2 mt-8 ">Add To Bag<img src={Logo} className="h-6 mx-2"/></button>
            </div>
        </>
      )}
     
       
      </aside>
    </section>
  )
}
