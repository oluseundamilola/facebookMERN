import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


// {"_id":"631c62d4d42418fdd26972e6","username":"olamide","email":"olamide@gmail.com","password":"$2b$10$WUFO7AgURtVR2Bw/KYN9a.hlG.uUHi3Ea7dLRORUs4rfluoDQWqs.","profilePicture":"persons/5.jpg","coverPicture":"cover.jpg","followers":[],"following":[],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1662804692704"}},"updatedAt":{"$date":{"$numberLong":"1663674497256"}},"__v":{"$numberInt":"0"},"city":"Texas","desc":"Hello my Friends!","from":"Lagos","relationship":{"$numberInt":"1"}},