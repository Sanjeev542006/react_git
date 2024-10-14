import React from 'react'
import Child from "./Child"
const Parent = () => {
  var asset = "land";
  var asset1 = "car";
  return (
  <>
    <div style={{backgroundColor: "palevioletred" }}>This is Parent</div>
    <Child document = {asset} document1 = {asset1} />
  </>
  )
}

export default Parent