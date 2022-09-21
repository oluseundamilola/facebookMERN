 import { useContext, useRef } from "react"
import "./login.css"
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
import {CircularProgress} from "@material-ui/core"
 
 const Login = () => {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
   



    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email: email.current.value  ,password: password.current.value  }, dispatch)
    }
    console.log(user)
   return (
     <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Damisocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Damisocial!
                </span>
            </div>

            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                    <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password} />
                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="15px"/> : "Login In"}</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegister">{isFetching ? <CircularProgress color="white" size="15px"/> : "Create Account"}</button>
                </form>
            </div>
        </div>
     </div>
   )
 }
 
 export default Login