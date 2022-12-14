import { publicRequest } from "./requestMethod"

export const loginCall = async (userCredentails, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try{
        const res = await publicRequest.post("auth/login", userCredentails)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    }catch(err){
        dispatch({ type: "LOGIN_FAILURE", payload: err })
    }
}