import React from 'react'

const Child = ({data}) => {
    console.log("child")
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Child)
