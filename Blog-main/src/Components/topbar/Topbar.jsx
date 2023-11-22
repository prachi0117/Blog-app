import React from 'react'
import { NavLink } from 'react-router-dom'
import './Topbar.scss'

export default function Topbar({state}) {
 
  return (
    <div className="top">
      <div className="topleft">
      <i className="fa-brands icon fa-facebook"></i>
      <i className="fa-brands icon fa-twitter"></i>
      <i className="fa-brands icon fa-pinterest"></i>
      <i className="fa-brands icon fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul>
       <li><NavLink className='link' to={'/'}>HOME</NavLink> </li>
       <li>ABOUT </li>
       <li>CONTACT </li>
       <li><NavLink className='link' to={'/write'}>WRITE</NavLink> </li>
       <li><NavLink className='link' to={state?'/Login':'/register'}>{state?'LOGIN':'REGISTER'}</NavLink> </li>


        </ul>
      </div>
      <div className="topright">

        <img src="https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80" alt="" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}
