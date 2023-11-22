import React from 'react'
import './write.scss'
export default function Write() {
  return (
    <div className='write'>
        <img src="https://images.unsplash.com/photo-1628250942747-2f577fd758dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className='fas fa-plus'></i>
                </label>
                       <input type="file" id='fileInput' style={{display:'none'}}/>
                       <input type="text" placeholder='Title'  className='writeInput' autoFocus={true}/>

            </div>
            
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story....' className='writeInput writeText' 
                type='text'></textarea>
            </div>
            <button>
                Publish
            </button>
            </form> 
          </div>
  )
}
