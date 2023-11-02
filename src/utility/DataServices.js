// Fetch Users Array
export const fetchUsers = async(setData) => {
    try{
        const response = await fetch("http://localhost:37000/users")
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
        const response = await fetch("http://localhost:37000/users/register",options)
        if(!response.ok){
            throw new Error(`${response.status}`)
        } else{
            const result = await response.json()
            console.log(result)
        }
    }catch(error){
        throw new Error(error.message)
    }
}