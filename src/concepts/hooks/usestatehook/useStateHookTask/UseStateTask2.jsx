import { useState } from "react"
// import carImage from '../../assets/car.jpg'
import "./task2.css";

const UseStateTask2=()=>{

    const [username,setName]=useState("Biswajeet")
    const [age,setAge]=useState(23)
    const [email,setEmail]=useState("biswajeet@gmail.com")
    const [address,setAddress]=useState("Bhubaneswar")
    const [bloodgrp,setbldgrp]=useState("o+ve")
    const [gender,setGender]=useState("Male")
    const [phno,sethnNO]=useState(8973878363)


    const updateName=()=>{
      let val=prompt("enter your name")
      setName(val)
    }

    const updateAge =()=>{
        let val=prompt("Enter your Age")
        setAge(val)
    }
   
     const updateEmail =()=>{
        let val=prompt("Enter your Age")
        setEmail(val)
    }
     const updateAddress =()=>{
        let val=prompt("Enter your Age")
        setAddress(val)
    }
     const updatebldgrp =()=>{
        let val=prompt("Enter your Age")
        setbldgrp(val)
    }
     const updateGender =()=>{
        let val=prompt("Enter your Age")
        setGender(val)
    } 
    const updatePhnNo =()=>{
        let val=prompt("Enter your Age")
        sethnNO(val)
    }
   

    return(
        <div className="mainbox">
           <div className="box">
            <div className="top">
                <div className="image">
                    <img src='/car.jpg'/>
                </div>
            </div>
            <div className="bottom">
            <div>Name : {username} </div>
            <div>Age : {age} </div>
            <div>Email : {email} </div>
            <div>Address : {address} </div>
            <div>Bloodgrp : {bloodgrp} </div>
            <div>Gender : {gender} </div>
            <div>PhoneNo :   {phno} </div>
            </div>
            
           </div>
           <div className="buttonSection">
               <button onClick={updateName}>Name</button>
               <button onClick={updateAge}>Age</button>
               <button onClick={updateEmail}>Email</button>
               <button onClick={updateAddress}>Address</button>
               <button onClick={updatebldgrp}>BloodGroup</button>
               <button onClick={updateGender}>Gender</button>
               <button onClick={updatePhnNo}>PhoneNo</button>
            </div>
        </div>
    )
}

export default UseStateTask2