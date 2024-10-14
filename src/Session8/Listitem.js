import React from 'react'

const Listitem = (props) => {
  return (
    <div>
      LIST ITEMS
      <ol >
          {
            props.data.map((val,ind) => (
              <li key={ind}>{val}</li>
            ))
          }
      </ol>
      <ul type="circle">
      <li>
          {
            props.data1.map((val,ind) => (
              <li key={ind}>{val}</li>
            ))
          }
        </li>
      </ul>
    </div>
  )
}

export default Listitem