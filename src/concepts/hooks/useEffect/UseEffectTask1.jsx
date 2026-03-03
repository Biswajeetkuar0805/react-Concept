import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Table from './Table'

const UseEffectTask1 = () => {
    const [products,setProducts]=useState([])

    const fdata=async () => {
        try{
          const response= await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        setProducts(data)
        } catch(error){
          toast.error("failed to load the data",{position:"top-center"})
        }
    }

   const sortedProducts = [...products].sort((a, b) =>
  a.title.localeCompare(b.title)
)
    
    useEffect(()=>{
        fdata()
    },[])

    const deleteuser = (id) => {
    const filteredProducts = products.filter(product => product.id !== id)
    setProducts(filteredProducts)
  }



  return (
    <div>
       {
          products.length===0? <h1>loading....</h1>: <Table products={sortedProducts} deleteUser={deleteuser} ></Table>
       }
    </div>
  )
}

export default UseEffectTask1
