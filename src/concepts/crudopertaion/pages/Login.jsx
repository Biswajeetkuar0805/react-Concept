import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate()

    const handleInput= (e)=>{
      const {name,value}=e.target
      setformdata({...formdata,[name]:value})
    }

    const handleform= async(e)=>{
     e.preventDefault()
      try {

      const res = await axios.get(
        `http://localhost:3000/users?email=${formdata.email}&password=${formdata.password}`
      );

      if (res.data.length > 0) {

        // store logged in user
      localStorage.setItem("jwt_token", JSON.stringify("uffuyhuef"));

      toast.success("Login Successful");

      navigate("/dashboard");
        navigate("/dashboard");

      } else {

        toast.error("Invalid Email or Password ❌");

      }

    } catch (error) {

      toast.error("Something went wrong");

      console.log(error);

    }

     console.log(formdata)
     setformdata({
         email:"",
        password:""
     })
    }
  return  (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleform}>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='email'
              value={formdata.email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name='password'
              value={formdata.password}
              onChange={handleInput}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login
