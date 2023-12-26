import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import User from './User/User.jsx';
import Footer from './Footer/Footer.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        
        element:<User></User>
      },
      {
        path :'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element :<UserDetails></UserDetails>
      },
      {
        path:'/footer',
        element:<Footer></Footer>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
