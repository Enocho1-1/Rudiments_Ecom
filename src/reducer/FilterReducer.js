
export const FilterReducer = (state, action) => {
  const { type, payload} = action
  switch(type){
    case 'ALL_PRODUCTS':
      return {...state, product: payload.product}
      default:
        throw new Error("No Filter")
  }
}