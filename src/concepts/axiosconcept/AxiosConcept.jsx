import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {
    //axios is a third party libray it is used to handle the api request in frontend from this we can find the built in method
    const [products,setProducts]=useState([])
    const fdata=async () => {
        const {data}= await axios.get("https://fakestoreapi.com/products")
        setProducts(data)

    }
    useEffect(()=>{
        fdata()
    },[])
  return (
    <div>
      <h1>AxiosConcept</h1>
      {
        products.length===0? <h1>Loading....</h1>:products.map((ele,index)=>{
           return( <h1 key={index}>{ele.title}</h1>)
        })
      }
    </div>
  )
}

export default AxiosConcept
