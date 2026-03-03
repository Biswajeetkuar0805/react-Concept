import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import MainPage from './components/MainPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MainPage from './components/MainPage'
import Dashboard from './pages/Dashboard'
import PrivateRouting from './privatingrouting/PrivateRouting'

const RouterLayout = () => {
    const routes=createBrowserRouter([{

        path:"/",
          element:<MainPage/>,
        children:[
       
         { path:"/home",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
         
          path:"/dashboard",
          element:<PrivateRouting>
            <Dashboard/>
          </PrivateRouting>
          
        }
      ]
 } ])
  return <RouterProvider router={routes}/>
}

export default RouterLayout
