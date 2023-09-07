
export const FilterReducer = (state, action) => {
  const { type, payload} = action
  switch(type){
    case 'CLEAR':
      return {...state,  TShirts:payload.value, Shirts:payload.value_two}
    case 'ALL_PRODUCTS':
      return {...state, product: payload.product}
    case 'T-SHIRTS':
      return {...state,  TShirts: payload.value,Shirts:false}
    case 'SHIRTS':
      return {...state, TShirts:false,  Shirts: payload.value}
      default:
        throw new Error("No Filter")
  }
}