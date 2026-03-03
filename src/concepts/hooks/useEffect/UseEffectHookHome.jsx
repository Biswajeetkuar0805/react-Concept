import React, { useEffect, useState } from 'react'

const UseEffectHookHome = () => {
    const [count,setCount]=useState(0)
     const [val,setval]=useState(10)
    const fdata=()=>{
        console.log("fadta function")
    }
   
    // useEffect(()=>{
    //     fdata()
    // },[])
     useEffect(()=>{
        fdata()
    },[count,val])

    // useEffect(()=>{
    //     fdata()
    // })

  return (
    <div>
      <h1>UseEffectHookHome</h1>
      <h2>{count}</h2>
      <p>{val}</p>
      <button onClick={()=>setCount(count+1)} >update</button>
      <button onClick={()=>setval(val+10)} >update val</button>
    </div>
  )
}

export default UseEffectHookHome
