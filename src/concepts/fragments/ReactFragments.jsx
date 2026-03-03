import React, { Fragment } from 'react'

const ReactFragments = () => {
    let arr=['sundari','sheela','leela','mala']
  return (
    // <ul>
    //    { arr.map((ele)=>{
    //      return <>
    //         <li>{ele}</li>
    //       </>
    //    })}
    // </ul>

    <>
    
      <Fragment>
        <h1>hafjdyujj</h1>
      </Fragment>
    </>
  )
}

export default ReactFragments
//Fragemnts are used as a wrapper container and it will not create a node .  (<></>)-EMPTY FRAGMEMTS
// this fragments accept no attribute
// Emty fragemnts act as a wrapper container and will not create a node in the dom.
