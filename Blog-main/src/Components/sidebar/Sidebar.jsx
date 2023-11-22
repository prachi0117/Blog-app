import React from 'react'
import './sidebar.scss'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarchild2">
            <span>ABOUT ME</span>
            <img src='https://images.unsplash.com/photo-1634140661143-314c0a9581b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste perspiciatis possimus ratione. 
                Dolorum a ipsum dolorem natus atque iure,
                 </p>
        </div>
        <div className="sidebarchild3">
        <span>CATEGORIES</span>
      <ul>
        <li>Life </li>
        <li>Music </li>
        <li>Style </li>
        <li>Sport </li>
        <li>Tech</li>
        <li>Cinema</li>
      </ul>
        </div>
        <div className="sidebarchild4">
            <span>FOLLOW US</span>
            <div className="sidebarSocial">
     <i className="fa-brands sidebaricon fa-facebook"></i>
      <i className="fa-brands sidebaricon fa-twitter"></i>
      <i className="fa-brands sidebaricon fa-pinterest"></i>
      <i className="fa-brands sidebaricon fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
