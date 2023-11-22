import React from 'react'
import { NavLink } from 'react-router-dom'
import './post.scss'
export default function Post({post}) {
  return (
    <div className='post' >
      <NavLink className='link' to={'/single'}>
       <img src={post.image}alt="" />

       <div className="postInfo">
        <div className="postCats">
            <span className="postcat">Music</span>
            <span className="postcat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet 

        </span>
       
        <span className="postDate">{post.time} </span>
       </div>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Maxime esse minus tenetur neque non omnis soluta qui repellat! 
        Totam cum minus aspernatur saepe minima rem amet
         perferendis sapiente optio consequatur.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Maxime esse minus tenetur neque non omnis soluta qui repellat! 
        Totam cum minus aspernatur saepe minima rem amet
         perferendis sapiente optio consequatur.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Maxime esse minus tenetur neque non omnis soluta qui repellat! 
        Totam cum minus aspernatur saepe minima rem amet
         perferendis sapiente optio consequatur.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Maxime esse minus tenetur neque non omnis soluta qui repellat! 
        Totam cum minus aspernatur saepe minima rem amet
         perferendis sapiente optio consequatur</p>
         </NavLink>
    </div>
  )
}
