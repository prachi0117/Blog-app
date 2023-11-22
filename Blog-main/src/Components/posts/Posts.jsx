import React from 'react'
import Post from '../post/Post'
import './posts.scss'
import File from '../file/File'

export default function Posts() {
  return (
    <div className='posts' >
{File.map((event)=>{

    return < Post
    key={event.id}
    post={event}
    
    
    />
})}

    </div>
  )
}
