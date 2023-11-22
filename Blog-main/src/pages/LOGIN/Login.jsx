import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.scss'
export default function Login({setState}) {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className='loginForm'>
            <label >Email</label>
            <input type="text" placeholder='Enter your email...' />
            <label >Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button >Login</button>
        </form>
        <button  className='registerLoginbtn' 
        >
        <NavLink className='link' to={'/register'} onClick={()=>{
          setState(false)}}>Register</NavLink>
        </button>
    </div>
  )
}
