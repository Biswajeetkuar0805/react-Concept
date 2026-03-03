import React, { Fragment } from 'react'

const ListAndKeys = () => {
    const arr=['leela','mala','leelabati','rangabati']
  return (
    <div>
      {
        arr.map((ele , index)=>{
            return(
                // <h1 key={index}>{ele}</h1>
                <Fragment key={index}>
                    <h1 >{ele}</h1>
                </Fragment>


            )
        })
      }
    </div>
  )
}

export default ListAndKeys
// KeyProps always used to faster the reconsiliation process
//  always we need to pass a unique key 