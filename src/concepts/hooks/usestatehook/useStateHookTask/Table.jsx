import React from 'react'
import { MdDelete } from 'react-icons/md'

const Table = ({userdata,deleteUser}) => {
  return (
    <div>
      <div className="card-container">
    {userdata.map(({ id, login, avatar_url,node_id }) => {
     return (<div key={id} className="card">
        <img src={avatar_url} alt="avatar" className="avatar" />
        <h3>Name: {login}</h3>
        <p>ID: {id}</p>
        <p> {node_id}</p>
        <MdDelete onClick={()=>deleteUser(id)} size={30} fill='red' />
      </div>)
})}
  </div>
    </div>
  )
}

export default Table
