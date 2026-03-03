import React from 'react'

const Card = ({user:{Username="user",age=18}}) => {
    console.log(Username)
console.log(age)
  return (
    <div>
      <h1>{Username}</h1>
      <h2>{age}</h2>
    </div>
  )
}

export default Card
