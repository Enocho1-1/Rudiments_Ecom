
// Fetch All Products Collection Page
export const fetchProducts = async (allProducts) => {
  try{
    const response = await fetch(`https://api.mocki.io/v2/f3308aac/shop`)
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
export const fetchClothingPiece = async(endPoint,queryItem,productId,setData,setLoading) => {
    try{
        setLoading(true)
        const response = await fetch(`https://api.mocki.io/v2/f3308aac${endPoint}${queryItem}${productId}`)
        if(!response.ok){
          throw new Error(`${response.status}`)
        } else{
          const result = await response.json()
          setData(result)
          setLoading(false)
        }
       
      }catch(error){
        throw new Error(error.message)
      }
}