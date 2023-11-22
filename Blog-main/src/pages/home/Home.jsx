import React from 'react'
import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/Posts'

import Sidebar from '../../Components/sidebar/Sidebar'
import './home.scss'
export default function Home() {
  return (
   <>
    <Header/>
    <div className="home" id='post'>
    <Posts/>
      <Sidebar/>
    </div>
    </>
    
  )
}
