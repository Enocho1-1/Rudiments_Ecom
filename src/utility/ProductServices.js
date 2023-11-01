
// Fetch All Products Collection Page
export const fetchProducts = async (allProducts) => {
  try{
    const response = await fetch(`http://localhost:37000/ALL_Products`)
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
        const response = await fetch(`http://localhost:37000/${endPoint}`)
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
      const response = await fetch(`http://localhost:37000/ALL_Products/${productId}`)
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

// Clothing Piece Measurement Validation
export const validateMeasurements = ( category ,setShirt, setPants,setShoes) => {
  category === "t-shirt" || category === "shirt" ? setShirt(true) : 
  category === "pants"|| category === "shorts" ? setPants(true) : 
  category === "shoes" ? setShoes(true) : <div></div>
}