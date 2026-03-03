import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [count,setCount]=useState(0)
    console.log("parent")

    const deleteUser=useCallback(()=>{
        console.log("user data")
    },[])

  return (
    <div>
      <h1>UseCallBackHook</h1>
      <p>{count}</p>
      <button className='p-3 bg-blue-300 cursor-pointer' onClick={()=>setCount(count + 1)}>Update</button>
      <Child data={deleteUser}/>
    </div>
  )
}

export default UseCallBackHook
