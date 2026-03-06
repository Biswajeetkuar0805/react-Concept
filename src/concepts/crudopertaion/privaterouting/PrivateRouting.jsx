import React from 'react'

const PrivateRouting = ({children}) => {
 const token = JSON.parse(localStorage.getItem("jwt_token"));

  return token ? children : <Navigate to="/login" />;

}

export default PrivateRouting
