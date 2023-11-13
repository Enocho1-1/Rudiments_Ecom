// Save User Data to Session Store
const saveSessionStore = (token,id,userEmail,title,firstName,lastName) => {
    sessionStorage.setItem("userToken", JSON.stringify(token))
    sessionStorage.setItem("userID", JSON.stringify(id))
    sessionStorage.setItem("userEmail", JSON.stringify(userEmail))
    sessionStorage.setItem("title", JSON.stringify(title))
    sessionStorage.setItem("firstName", JSON.stringify(firstName))
    sessionStorage.setItem("lastName", JSON.stringify(lastName))
    sessionStorage.setItem("lastName", JSON.stringify(lastName))

}

// Fetch Users Array
export const fetchUsers = async(setData) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/users`)
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

// Register New User
export const registerUser = async (options) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/register`,options)
        if(!response.ok){
            throw new Error(`${response.status}`)
        } else{
            const result = await response.json()
            saveSessionStore(result.accessToken,result.user.id,result.user.email,result.user.title,result.user.firstName,result.user.lastName)
        }
    }catch(error){
        throw new Error(error.message)
    }
}

// Log User In
export const loginUser = async (options,setIsError,navigate) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/signin`,options)
        if(!response.ok){
            setIsError(true)
        } else{
            const result = await response.json()
            saveSessionStore(result.accessToken,result.user.id,result.user.email,result.user.title,result.user.firstName,result.user.lastName)
            navigate("/")
        }
    }catch(error){
        throw new Error(error.message)
    }
}

// POST User Order
export const postUserOrder = async (options,navigate) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,options)
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }else {
        const result = await response.json();
        navigate("/checkout/order-confirmation",{state: { userData:result, Order_status:true}})
    }
}

// GET User Orders
export const getUserOrders = async (options,setData,setNoOrder,userID) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?userInfo.id=${userID}`,options)
        if(response.status === 404){
            setNoOrder(true)
        } else{
            const result = await response.json()
            setNoOrder(false)
            setData(result)
        }
    }catch(error){
        throw new Error(error.message)
    }
}