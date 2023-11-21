
export const FilterReducer = (state, action) => {
  const { type, payload} = action
  switch(type){
    case 'CLEAR':
      return {...state,  TShirts:false, Shirts:false, Pants: false, Shorts:false,  Shoes:false,  Accessories:false,   Colors:false, SelectColor:null}
    case 'ALL_PRODUCTS':
      return {...state, product: payload.product}
    case 'T-SHIRTS':
      return {...state,  TShirts: payload.value, Shirts:false, Pants: false, Shorts:false,  Shoes:false,  Accessories:false, Colors:false, SelectColor:null }
    case 'SHIRTS':
      return {...state, TShirts:false,  Shirts: payload.value, Pants: false, Shorts:false,  Shoes:false,  Accessories:false, Colors:false, SelectColor:null }
    case 'PANTS':
      return {...state, TShirts:false,  Shirts: false, Pants: payload.value,Shorts:false,  Shoes:false,  Accessories:false, Colors:false, SelectColor:null}
    case 'SHORTS':
      return {...state, TShirts:false,  Shirts: false, Pants: false,Shorts:payload.value,  Shoes:false,  Accessories:false, Colors:false, SelectColor:null}
    case 'SHOES':
        return {...state, TShirts:false,  Shirts: false, Pants: false, Shorts:false,  Shoes:payload.value,  Accessories:false, Colors:false, SelectColor:null }
    case 'ACCESSORIES':
        return {...state, TShirts:false,  Shirts: false, Pants: false, Shorts:false,  Shoes:false,  Accessories:payload.value, Colors:false, SelectColor:null }
    case 'COLORS':
          return {...state,  Colors:payload.value, Price:false }
    case 'SELECT_COLOR':
      return {...state, TShirts:false, Shirts:false, Pants: false, Shorts:false,  Shoes:false,  Accessories:false, SelectColor:payload.value }
    case 'PRICE':
      return { ...state, Colors:false ,Price:payload.value}
    case 'PRICE_SORT':
      return 
    default:
      throw new Error("No Filter")
  }
}