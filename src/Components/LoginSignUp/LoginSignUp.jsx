import React,{ useState } from 'react'
import './LoginSignUp.css'
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import user from '../Assets/user.png'

export const LoginSignUp = () => {
    const [action,setAction]=useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
            <img alt='' src={user}></img>
            <input text='user' placeholder='Name'></input>
        </div>}
            
            <div className="input">
                <img alt='' src={email}></img>
                <input text='email' placeholder='Email'></input>
            </div>
            <div className="input">
                <img alt='' src={password}></img>
                <input text='password' placeholder='Password'></input>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgotPass">Forgot Password? <span>click here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>SignUp</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
        </div>
    </div>
  )
}
export default LoginSignUp