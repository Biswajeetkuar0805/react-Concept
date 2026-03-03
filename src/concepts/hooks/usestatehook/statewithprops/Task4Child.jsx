import React from 'react'
import { MdDelete } from 'react-icons/md'

const Task4Child = ({productdata,deleteUser}) => {
  return (
    <div>
        <div className="card-container">
            {
                productdata.map(({id,title,price,description,category,image,rating:{rate,count}})=>{
                    return (
                        <div className="card">
                            <img src={image} className='avatar'/>
                            <span >Id : {id}</span>
                            <h3>Title : {title}</h3>
                            <h4>Price :{price}</h4>
                            <p>Description : {description}</p>
                            <p>Category : {category}</p>
                            <p>Rate : {rate}</p>
                            <p> Count : {count}</p>
                            <MdDelete onClick={()=>deleteUser(id)} className='icon' size={50} fill='red'/>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Task4Child
