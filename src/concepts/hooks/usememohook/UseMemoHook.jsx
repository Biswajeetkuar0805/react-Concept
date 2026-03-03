import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count,setCount]=useState(0)
    const expensiveCalculation =useMemo(()=>{
        let sum=0
        for(let i=1;i<=1000000;i++){
            sum+=i;
        }

        return sum
    },[])
    console.log(expensiveCalculation)
   
     //let a=20
     //let b=a
     //clg(a)
     //clg(b)
    
      //let a=[1,2,3]
      //let c=[...a]
     //let b=JSON.parse(JSON.stringify(20))
     //b.push(10)
     //clg(a)
     //clg(b)



  return (
    <div>
      <h1>UseMemoHook</h1>
      <h1>{count}</h1>
      <button className='bg-amber-200 border rounded-lg cursor-pointer ' onClick={()=>setCount(count + 1)}>update</button>
    </div>
  )
}

export default UseMemoHook
