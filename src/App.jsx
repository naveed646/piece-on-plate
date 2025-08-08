import './App.css'
import Layout from './components/ui/Layout'
import Login from './components/auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/auth/Register'
import HomePage from './pages/HomePage'
import AboutUs from './pages/About'
import ExploreMenu from './pages/ExploreMenu'

function App() {
  const router= createBrowserRouter([
     {
        path:'/register',
        element: <Register/>

      },
       {
        path:'/login',
        element: <Login/>

      },
    {
      path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <HomePage/>

      },
      {
        path:'/about',
        element: <AboutUs/>

      },
      {
        path:'/explore',
        element: <ExploreMenu/>

      },
     
    ]    
  }
  ])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
