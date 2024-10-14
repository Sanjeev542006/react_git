import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ()=>{
  const Back = useNavigate();
  const handleBack=()=>{
      Back("/");
  }
  return (
    <>
    <h1>Welcome to Home</h1>
    <button onClick={handleBack}>Back</button>
    </>
  )
}

export default Home;