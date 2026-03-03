import React, { useState } from 'react'
import Child from './Child'

const ReactMemo = () => {
    const [count,setCount]=useState(0)
    console.log("parent")
  return (
    <div>
        <h1>ReactMemo</h1>
        <h3>{count}</h3>
        <button className='bg-blue-400 border cursor-pointer rounded-lg' onClick={()=>setCount(count+1)}>Update</button>
      <Child name='leela'/>
    </div>
  )
}

export default ReactMemo
