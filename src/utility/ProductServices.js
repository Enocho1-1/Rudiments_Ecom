
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