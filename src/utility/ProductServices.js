

// Fetch All Products Collection Page
export const fetchProducts = async (allProducts) => {
  try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/ALL_Products`)
    if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      allProducts(result) 
    }
  }catch(error){
    throw new Error(error.message)
  }
}

// Fetch Clothing Piece and user search
export const fetchClothingPiece = async(endPoint,setData) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/${endPoint}`)
        if(!response.ok){
          throw new Error(`${response.status}`)
        } else{
          const result = await response.json()
          setData(result)
        }
       
      }catch(error){
        throw new Error(error.message)
      }
}

// Fetch Clothing Piece and user search
export const fetchIndividualItem = async(productId,setData) => {
  try{
      const response = await fetch(`${process.env.REACT_APP_HOST}/444/ALL_Products/${productId}`)
      if(!response.ok){
        throw new Error(`${response.status}`)
      } else{
        const result = await response.json()
        setData(result)
      }
     
    }catch(error){
      throw new Error(error.message)
    }
}

export const userSearchItem = async(searchItem,setData) => {

  try{
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/ALL_Products?q=${searchItem}`)
    if(!response.ok){
      throw new Error(`${response.status}`)
    } else{
      const result = await response.json()
      setData(result)
    }
   
  }catch(error){
    throw new Error(error.message)
  }
}

// Discount User Price
export const discountUserTotal = (total,userPromo,promoCode,dispatch , setPromoError, discountPriceStore) => {
  if(userPromo === promoCode){
    const newPrice = Math.floor(total - (total * 0.20) )
     discountPriceStore(newPrice)
     dispatch({type:"PROMO_APPLIED", payload:{value:true}})
     setTimeout(() =>  dispatch({type:"PROMO_APPLIED", payload:{value:false}}), 3000)
  }else{
    setPromoError(true)
    setTimeout(() => {setPromoError(false)}, 3000)
  }
}

// Clothing Piece Measurement Validation
export const validateMeasurements = ( category ,setShirt, setPants,setShoes) => {
  category === "t-shirt" || category === "shirt" ? setShirt(true) : 
  category === "pants"|| category === "shorts" ? setPants(true) : 
  category === "shoes" ? setShoes(true) : <div></div>
}