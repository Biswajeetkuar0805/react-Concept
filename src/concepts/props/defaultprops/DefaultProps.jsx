import React from 'react'
import Card from './Card'

const DefaultProps = () => {
    const userData =[{
        Username:"Bisu",
        age:24
    },
    {
        age:23
    },
    {
        Username:"sheela"
    }
    

  
]


  return (
    <div>
      {
        userData.map((ele)=>{
          return  <Card user={ele} />
        })
      }
    </div>
  )
}

export default DefaultProps
