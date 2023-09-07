import { createContext, useContext, useReducer } from "react";
import {FilterReducer} from "../reducer/FilterReducer"

const filterInitialState = {
  product: [],
  TShirts: false,
  Shirts: false
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

  const filteredProducts = allShirts(allTShirts(state.product))
  const value = {
    state,
    dispatch,
    product: filteredProducts,
    allProducts,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)