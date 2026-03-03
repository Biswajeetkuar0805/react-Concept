import React from 'react'
import PetrolPump from './PetrolPump'
import Bike from './Bike'

const HOC = () => {
  return (
    <div>
      <PetrolPump >
       <Bike name="H2R"/>
      </PetrolPump>
      <Bike name="Splender"/>
    </div>
  )
}

export default HOC
