import React, { useState } from 'react'

const FCounter = () => {
    const [ Update, setUpdate ] = useState(0);
    const handleAdd = () =>{
        setUpdate(Update+1)
    }
    const handleSub = () =>{
        setUpdate(Update-1)
    }
  return (
    <div>
        <center>
            <button onClick={handleAdd}>+</button><br/>
            <h2>{Update}</h2>
            <button onClick={handleSub}>-</button>
        </center>
    </div>
  )
}

export default FCounter