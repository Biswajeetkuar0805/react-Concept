import React, { useState } from 'react'

const UseStateCase1 = () => {
    const [count,setCount]=useState(0)
    console.log(count)

//     const updateCount=()=>{
//         setCount(count+1)
//     }
//   updateCount()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count + 1)}}></button>
    </div>
  )
}

export default UseStateCase1
