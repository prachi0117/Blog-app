import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <div className='header' >
        <div className="headertitles">
            <span className='span1'>React & Node </span>
            <span className='span2'>Blog</span>
        </div>
        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80" alt="" />
    </div>
  )
}
