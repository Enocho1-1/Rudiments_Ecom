import { createContext, useContext } from "react";

const filterInitialState = {
  product: []
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) => {
  const value = {
    product: [1,2,3]
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)