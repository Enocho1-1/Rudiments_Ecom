
export const FilterReducer = (state, action) => {
  const { type, payload} = action
  switch(type){
    case 'CLEAR':
      return {...state,  TShirts:false, Shirts:false, Pants: false, Shorts:false,  Shoes:false,  Accessories:false}
    case 'ALL_PRODUCTS':
      return {...state, product: payload.product}
    case 'T-SHIRTS':
      return {...state,  TShirts: payload.value, Shirts:false, Pants: false, Shorts:false,  Shoes:false,  Accessories:false }
    case 'SHIRTS':
      return {...state, TShirts:false,  Shirts: payload.value, Pants: false, Shorts:false,  Shoes:false,  Accessories:false }
    case 'PANTS':
      return {...state, TShirts:false,  Shirts: false, Pants: payload.value,Shorts:false,  Shoes:false,  Accessories:false}
    case 'SHORTS':
      return {...state, TShirts:false,  Shirts: false, Pants: false,Shorts:payload.value,  Shoes:false,  Accessories:false}
    case 'SHOES':
        return {...state, TShirts:false,  Shirts: false, Pants: false, Shorts:false,  Shoes:payload.value,  Accessories:false }
    case 'ACCESSORIES':
        return {...state, TShirts:false,  Shirts: false, Pants: false, Shorts:false,  Shoes:false,  Accessories:payload.value }
      default:
        throw new Error("No Filter")
  }
}