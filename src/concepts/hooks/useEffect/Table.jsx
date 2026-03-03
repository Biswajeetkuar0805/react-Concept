import React from 'react'
import { MdDelete } from 'react-icons/md'

const Table = ({ products ,deleteUser  }) => {
  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>TiTle</th>
          <th>Image</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              
               {product.title}
            </td>
            <td> <img 
                src={product.image} 
                alt={product.title} 
                width="50"
              /></td>
          

            <td> <MdDelete onClick={()=>deleteUser(product.id)} size={30} fill='red' /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table