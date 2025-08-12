import './App.css'
import Layout from './components/ui/Layout'
import LoginPage from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AboutUs from './pages/About'
import ExploreMenu from './pages/ExploreMenu'
import UserDashboard from './pages/UserDashboard'

function App() {
  const router= createBrowserRouter([
     {
        path:'/register',
        element: <RegisterPage/>

      },
       {
        path:'/login',
        element: <LoginPage/>

      },

       {
        path:'/dashboard',
        element: <UserDashboard/>

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
