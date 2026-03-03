import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import './task2.css'

const UseStateReduce = () => {
    const [userdata,setuserdata]=useState({
        username:"bisu",
        age:23,
        email:"jbdajhjh",
        gender:"male",
        number:1234466,
        loc:"bbsr",
        b_grp:"o+"
    })

    const {username,age,email,gender,number,loc,b_grp}=userdata

    const updateUsername =()=>{
        const newValue=prompt("enter your name")
        setuserdata({...userdata,username:newValue})
    }
     const updateUserAge =()=>{
        const newValue=Number(prompt("enter your Age"))
        setuserdata({...userdata,age:newValue})
    }
     const updateUserEmail =()=>{
        const newValue=prompt("enter your email")
        setuserdata({...userdata,email:newValue})
    }

     const updateUserGender =()=>{
        const newValue=prompt("enter your email")
        setuserdata({...userdata,gender:newValue})
    }


     const updateUserNumber =()=>{
        const newValue=Number(prompt("enter your Number"))
        setuserdata({...userdata,number:newValue})
    }
     const updateUserloc =()=>{
        const newValue=prompt("enter your Location")
        setuserdata({...userdata,loc:newValue})
    }
    const updateUserbldgrp =()=>{
        const newValue=prompt("enter your Location")
        setuserdata({...userdata,b_grp:newValue})
    }
  return (
    <div className="mainbox">
    <div className='top'>
        <div className="img">
            
        </div>
        <div className="bottom">
            <h2>{username} <BiEdit onClick={updateUsername}/></h2>
            <p>{age} <BiEdit onClick={updateUserAge}/></p>
             <p>{email} <BiEdit onClick={updateUserEmail}/></p>
              <p>{gender} <BiEdit onClick={updateUserGender}/></p>
               <p>{number} <BiEdit onClick={updateUserNumber}/></p>
                <p>{loc} <BiEdit onClick={updateUserloc}/></p>
                 <p>{b_grp} <BiEdit onClick={updateUserbldgrp}/></p>
        </div>
      
    </div>
    </div>
  )
}

export default UseStateReduce
