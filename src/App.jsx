import './App.css'
import Layout from './components/ui/Layout'
import Login from './components/auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/auth/Register'
import HomePage from './pages/HomePage'

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <HomePage/>

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
