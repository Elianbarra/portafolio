import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contact.jsx";
import Pacman from './components/pacman.jsx'; 
import Calculadora from "./components/Calculadora.jsx";
import Login from "./components/Login.jsx";
import Gift from "./components/Gift.jsx";
import Colors from "./components/Colors.jsx";
import Register from "./components/register.jsx";
import Tictactoe from "./components/tictactoe.jsx";
import {createHashRouter, RouterProvider} from 'react-router-dom'




const router = createHashRouter([
  
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/Navbar',
    element: <Navbar />,
  },

  {
    path: '/about',
    element: <AboutMe />,
  },
  {
    path: '/works',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contacts />,
  },
  {
    path: '/pacman',
    element: <Pacman />,
  },
  {
    path: '/calculadora',
    element: <Calculadora />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/gift',
    element: <Gift />,
  },
  {
    path: '/colors',
    element: <Colors />,
  },
  {
    path: '/register', 
    element: <Register />,
  
  },
  {
    path: '/tictactoe',
    element: <Tictactoe />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
