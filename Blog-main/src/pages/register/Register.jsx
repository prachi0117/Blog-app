import React from "react";
import { NavLink } from "react-router-dom";
import "./register.scss";
export default function Register({setState}) {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button>Register</button>
      </form>
      <button className="registerbtn" 
      >
        <NavLink className='link' to={'/login'} onClick={()=>{
          setState(true)}}>Login</NavLink>
      </button>
    </div>
  );
}
