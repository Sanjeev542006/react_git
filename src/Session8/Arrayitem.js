import React from 'react'
import Listitem from './Listitem'
import './Arrayitem.css'

function Arrayitem() {
  const arrx = ["color1","color2","color3","color4","color5"];
  const arry = [101,102,103,107,111];
  return (
    <center className='array' style={{alignItems:"center"}}>Arrayitem

      <Listitem data={arrx} data1={arry}></Listitem>
    </center>
  )
}

export default Arrayitem