import React, { useRef, useState } from 'react'

const UseRefHookHome = () => {
  const [userName,setUserName]=useState()
  const namedRef =useRef()
  // console.log(namedRef)

  const updateText=()=>{
     namedRef.current.innerText="leela"
  }
  // const UpdateName=()=>{
  //    setUserName
  // }

  console.log("jii")
  return (
    <div>
      <h1 ref={namedRef}>sundari</h1>
      {/* <button onClick={()=>{setUserName("mala")}}>kjdjkjk</button> */}
      <button onClick={updateText}>updateText</button>

    </div>
  )
}

export default UseRefHookHome
