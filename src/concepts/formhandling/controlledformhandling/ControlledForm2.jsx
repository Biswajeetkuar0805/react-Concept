import React, { useState } from 'react'

const ControlledForm2 = () => {
   const [formdata,setFormData]=useState({
     username:"",
     email:"",
     password:"",
     course:""
   }) 
  
   const {username,email,password,course}=formdata
   
   const handleInput=(e)=>{
    const {name,value}=e.target
    setFormData({...formdata,[name]:value})

   }

   const handleForm=(e)=>{
     e.preventDefault()
     console.log(formdata)
    
    
     setFormData(
       
       
        {
      username:"",
     email:"",
     password:"",
     course:""

        }
     )
   }

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
            <input type='text' placeholder='enter your name' name='username' onChange={handleInput} value={username}/>
            
        </div>
        <div>
            <input type='email' placeholder='enter your email' name='email' onChange={handleInput} value={email}/>
            
        </div>
        <div>
            <input type='password' placeholder='enter your password' name='password' onChange={handleInput} value={password}/>
            
        </div>
        <div>
            <label htmlFor=''>Select Your course </label>
            <select name='course' value={course} onChange={handleInput}>
                {/* <select name='course' selected={!course ? true : false} onChange={handleInput}></select> */}
                <option value=""></option>
                <option value="B.Tech">B.Tech</option>
                <option value="BSc">BSc</option>
                <option value="MCA">MCA</option>
                <option value="M.Tech">M.Tech</option>
            </select>
           
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm2
