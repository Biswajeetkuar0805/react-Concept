import React, { useState } from 'react'

const UseStateHook = () => {

    //It is used to store the data and update the data dynamically
    //whenever used a usestatehook it will return array of length 2.

    // const data=useState()
     const [x,y]=useState(0)

     const updateValue=()=>{
        y(x+1)
     }

     const sub=()=>{
        y(x-1)
     }
     const reset=()=>{
        y(0)
     }


  return (
    <div>
        <h1>{x}</h1>
      <button onClick={updateValue}>+1</button>
       <button onClick={sub}>-1</button>y
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default UseStateHook
