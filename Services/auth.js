import { useDispatch } from 'react-redux'

//SAVE TOKEN IN SESSION STORAGE
export const authenticate = (response)=>{
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("user_name", response.data.result[0].user_name)
}

//GET USER
export const getUser=()=>{
    if(window !== "undefined"){
        if(localStorage.getItem("user_name")){
            return (localStorage.getItem("user_name"))
        }
    }else{
        return false
    }
}

//LOGOUT
export const logout=()=>{
    const dispatch = useDispatch()
    return dispatch({
        type: "LOGOUT",
        payload: null
    })
}