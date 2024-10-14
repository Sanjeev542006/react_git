import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'

const Configuration = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Login/>}  ></Route>
        <Route  path="/Home" element={<Home/>}  ></Route>
        <Route  path="/Signup" element={<Signup/>}  ></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Configuration