import { createContext, useContext, useReducer } from "react";
import {FilterReducer} from "../reducer/FilterReducer"

const filterInitialState = {
  product: [],
  TShirts: false,
  Shirts: false,
  Pants:false,
  Shorts:false,
  Shoes:false,
  Accessories:false,
  Colors:false,
  SelectColor:null,
  Price: false,
  Sort_By:null,
  crypticText: "arch ncemsib",
  promo:"",
  discount_price:null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) => {
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState)

  // All Products 
  function allProducts(products){
    dispatch({
      type:"ALL_PRODUCTS",
      payload:{
        product : products
      }
    })
  }

  // Filter T-Shirts
  function allTShirts(products){
    return state.TShirts ? products.filter(item => item.category === "t-shirt") : products
  }

  // Filter Shirts
  function allShirts(products){
    return state.Shirts ? products.filter(item => item.category === "shirt") : products
  }

   // Filter Shirts
   function allPants(products){
    return state.Pants ? products.filter(item => item.category === "pants") : products
  }


  // Filter Shorts
   function allShorts(products){
    return state.Shorts ? products.filter(item => item.category === "shorts") : products
  }
  
  // Filter Shoes
  function allShoes(products){
    return state.Shoes ? products.filter(item => item.category === "shoes") : products
  }

  // Filter Accessories
  function allAccessories(products){
    return state.Accessories ? products.filter(item => item.category === "accessories") : products
  }

  // Filter Colors
  function colorFilter(products){
    
    switch(state.SelectColor){
      case 'white':
        return products.filter(product => product.color === 'white')
      case 'black':
        return products.filter(product => product.color === 'black')
      case 'navy':
        return products.filter(product => product.color === 'navy')
      case 'grey':
        return products.filter(product => product.color === 'grey')
      case 'brown':
        return products.filter(product => product.color === 'brown')
      case 'green':
        return products.filter(product => product.color === 'green')
      case 'orange':
        return products.filter(product => product.color === 'orange')
      case 'pink':
        return products.filter(product => product.color === 'pink')
      case 'blue':
        return products.filter(product => product.color === 'blue')
      case 'purple':
        return products.filter(product => product.color === 'purple')
      case 'ecru':
        return products.filter(product => product.color === 'ecru')
      case 'khaki':
        return products.filter(product => product.color === 'khaki')
      case 'beige':
        return products.filter(product => product.color === 'beige')
      case 'stone':
        return products.filter(product => product.color === 'stone')
      default:
          return products;
    }
  }

  // Price Sort
  function priceSort(products) {
    switch(state.Sort_By){
      case 'LOW_HIGH':
        return products.sort((a,b) => Number(a.price) - Number(b.price))
      case 'HIGH_LOW':
        return products.sort((a,b) => Number(b.price) - Number(a.price))
      default:
        return products
    }
  }

  // Retrieve User Info from Session Store.
  function retrieveUserInfo(){
    const firstName = JSON.parse(sessionStorage.getItem("firstName"))
    const lastName = JSON.parse(sessionStorage.getItem("lastName"))
    const title = JSON.parse(sessionStorage.getItem("title"))
    const userEmail = JSON.parse(sessionStorage.getItem("userEmail"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))
    const userToken = JSON.parse(sessionStorage.getItem("userToken"))
    const promoCode = JSON.parse(sessionStorage.getItem("promoCode"))

    return { firstName,lastName,title, userEmail,userID,userToken,promoCode }
  }

  // Random Promo Code Genrator
  function randomPromoCode() {
    const promoArray = ["MINIMAL","STYLISH","SUAVE","GAUDY","TREND-SETTER","AUTHENTIC","LOUD","BOISTEROUS","ENVOGUE","FIRE"]
    const promoCode = promoArray[Math.floor(Math.random()*promoArray.length)]
    state.promo = promoCode
  }

  // Discount Price 
  function discountPriceStore(price) {
    state.discount_price = price
  }

  const filteredProducts = allAccessories(allShoes(allShorts(allPants(allShirts(allTShirts(colorFilter(priceSort(state.product))))))))

  const value = {
    state,
    dispatch,
    product: filteredProducts,
    allProducts,
    retrieveUserInfo,
    randomPromoCode,
    discountPriceStore
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)