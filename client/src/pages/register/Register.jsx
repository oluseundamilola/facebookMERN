 import { useRef } from "react"
import { publicRequest } from "../../requestMethod"
import "./register.css"
import { useNavigate  } from "react-router-dom"
 
 const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match")
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await publicRequest.post("auth/register", user)
                history("/login")
            }catch(err){
                console.log(err)
            }
        }
    }


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
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Email" type="email" required ref={email}  className="loginInput" />
                    <input placeholder="Password" type="password" minLength="6"  required ref={password}  className="loginInput" />
                    <input placeholder="Confirm Password" type="password"  required ref={passwordAgain}  className="loginInput" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegister">Login into Account</button>
                </form>
            </div>
        </div>
     </div>
   )
 }
 
 export default Register