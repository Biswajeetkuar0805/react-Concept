import React, { useContext } from 'react'
import { GlobalContext } from './ContextApiConcept'

const A1 = () => {
    const res=useContext(GlobalContext)
    console.log(res)
  return (
    <div>
      
    </div>
  )
}

export default A1
