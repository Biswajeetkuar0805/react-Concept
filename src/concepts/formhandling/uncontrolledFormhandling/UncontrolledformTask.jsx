import React, { useRef } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Slide, toast } from 'react-toastify'
// import 'UncontrolledFormHandling.css'
const UncontrolledformTask = () => {
    const namedRef=useRef(null)
    const passwordRef = useRef(null)

    const handleForm=(e)=>{
      e.preventDefault()
      const UserName=namedRef.current.value
      const UserpassWord=passwordRef.current.value

      if(!UserName || !UserpassWord){
        toast.error("All Fields are required",{position:"top-center"}
            
        )
        return
      } else{
        toast.success("Login Successful",{position:"top-right",theme: "colored",transition: Slide})
      }
    }
  return (
   <>
   <div className="parent">
         <div className="rounddiv"></div>
        <div className="rounddiv2"></div>
        <div className="loginform">
          
          <div className="left">
            <h1>Form</h1>
            <p>How to started lorem ipsum dotor at?</p>
            <form onSubmit={handleForm}>
              <input type="text " placeholder="username" ref={namedRef} />
              <input type="password" placeholder="password"  ref={passwordRef}/>
              <button className="form-button">Login Now</button>
            </form>
            
            <div className="left-bottom">
              <p>
                <strong>login</strong> with others
              </p>

              <button className="buttons same"><FcGoogle size={20} />Login with google</button>
              <button className="buttons same"><FaFacebookF fill='blue' /> Login with Facebook</button>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src='/office.jpg'/>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default UncontrolledformTask
