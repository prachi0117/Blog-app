import React, { useState } from 'react'
import Home from './pages/home/Home'
import Topbar from './Components/topbar/Topbar'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/LOGIN/Login'
import Register from './pages/register/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
 const[state,setState]=useState(false)
  return (
    <>
    <BrowserRouter>
    <Topbar state={state} setState={setState}/>
    <Routes>
  <Route exact path='/' element={<Home  />}/>
  <Route path='/register' element={<Register state={state} setState={setState}/>}/>
  <Route  path='/login' element={<Login state={state} setState={setState}/>}/>
  <Route path='/setting' element={<Setting/>}/>
  <Route path='/write' element={<Write/>}/>
  <Route path='/single' element={<Single/>}/>

    </Routes>
    </BrowserRouter>


    </>
  )
}
