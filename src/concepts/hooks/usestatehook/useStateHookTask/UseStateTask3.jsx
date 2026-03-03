import { useState } from "react"
import "./UseStateTask3.css";
// import { MdDelete } from "react-icons/md";
import Table from "./Table";
import { Atom } from "react-loading-indicators";

const UseStateTask3=()=>{
    const [userdata,setUserData]=useState([])
    const [loading,setLoading]=useState(false)
    
   



        const fdata=async ()=>{
          setLoading(true)
              try{
          const data=await fetch("https://api.github.com/users")
          const res= await data.json()
           setTimeout(()=>{
            setUserData(res)
            setLoading(false)
           },1000)
        }
         
        catch(error){       
      console.log(error)
        }

    }

    const resetData=()=>{
      setUserData([])
    }

    const deleteUser=(id)=>{
         const  filterUser= userdata.filter((ele)=>
          ele.id !==id)
          setUserData(filterUser)
         
    }
       
//  const {login,id,avatar_url}=userdata


    
    
    // console.log(userdata)
    return(
      <div className="mainbox">

        <button onClick={fdata} className="btn">
    Update Fetched Data
  </button>
 <div>
     {
      loading?<div className="load" ><Atom color="#ed3514" size="large" text="Loading..." textColor="#0080ff" /></div>:
      <Table  userdata={userdata} deleteUser={deleteUser} />
     }
 </div>
  
</div>


         
    )
  
}

export default UseStateTask3