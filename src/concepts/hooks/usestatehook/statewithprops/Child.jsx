import React from 'react'

const Child = ({count,setcount}) => {
    console.log("Child")
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{
        setcount(count+1)
      }}> update from child</button>
    </div>
  )
}

export default Child
