import { createContext, useContext, useReducer } from "react";
import {FilterReducer} from "../reducer/FilterReducer"

const filterInitialState = {
  product: []
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) => {
  const [state, dispatch] = useReducer(FilterReducer, filterInitialState)

  function allProducts(products){
    dispatch({
      type:"ALL_PRODUCTS",
      payload:{
        product : products
      }
    })
  }
  
  const value = {
    product: state.product,
    allProducts
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)