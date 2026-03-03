import React, { useState } from 'react'

const ControlledFormHandling = () => {
    // const [username,setusername]=useState("")
     // const handleInput=(e)=>{
    //     const {name,value}=e.target
    //     setusername(value)
    // }
 
    //n number of input data
    const [formdata,setformdata]=useState({
        username:"",
        email:"",
        password:"",
        phoneno:"",
    })

    const  [errors,setErrors]=useState(null)
    const handleInput=(e)=>{
        const {name,value}=e.target
        setErrors(null)
        setformdata({...formdata,[name]:value})
    }

    const handleForm=(e)=>{
        e.preventDefault()
        // console.log(formdata)
        if(!formdata.username ||!formdata.email ||!formdata.password ||!formdata.phoneno  ){
           setErrors(true)
        }
        setformdata({
            username:"",
            email:"",
        password:"",
        phoneno:"",
        })
    }
  return (
    <div>
      <form onSubmit={handleForm} >
        <input type='text' placeholder='username' name='username' onChange={handleInput} value={formdata.username}/>
        {
            errors? <p style={{color:"red"}}>Username is required <sup>*</sup></p>:""
        }
          <br>
          </br>
          <input  type='email' placeholder='email' name='email' onChange={handleInput} value={formdata.email}/>
            {
            errors? <p style={{color:"red"}}>email is required <sup>*</sup></p>:""
        }
          <br>
          </br>
          <input  type='password' placeholder='password' name='password' onChange={handleInput}  value={formdata.password}/>
           {
            errors? <p style={{color:"red"}}>email is required <sup>*</sup></p>:""
        }
          <br>
          </br>
          <input  type='number' placeholder='PhoneNo' name='phoneno' onChange={handleInput}  value={formdata.phoneno}/>
           {
            errors? <p style={{color:"red"}}>email is required <sup>*</sup></p>:""
        }
          <button>Submit</button>
      </form>
      <h1>{formdata.username}</h1>
        <h1>{formdata.email}</h1>
          <h1>{formdata.password}</h1>
            <h1>{formdata.phoneno}</h1>
    </div>
  )
}

export default ControlledFormHandling
