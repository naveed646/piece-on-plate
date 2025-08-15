import './App.css'
import Layout from './components/ui/Layout'
import LoginPage from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import AboutUs from './pages/About'
import ExploreMenu from './pages/ExploreMenu'
import UserDashboard from './pages/UserDashboard'
import UserDashBoardLayout from './components/userDashboardComp/userDashBoardLayout'
import ReservationTable from './components/userDashboardComp/ReservationTable'
import Table from './components/userDashboardComp/Table'
import Offer from './components/userDashboardComp/Offer'
import Services from './pages/Services'
import ConatctUs from './pages/ConatctUs'

function App() {
  const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/explore',
        element: <ExploreMenu />
      },
         {
        path: '/services',
        element: <Services />
      },
      {
        path: '/contact',
        element: <ConatctUs />
      }
    ]
  },

  {
    path: '/',
    element: <UserDashBoardLayout />,
    children: [
      {
        path: 'dashboard',
        element:<UserDashboard/>
      },
    {
        path: 'reservation',
        element: <ReservationTable/>
      },
      {
        path: 'table',
        element: <Table/>
      },
       {
        path: 'offer',
        element: <Offer/>
      },

    ]
  }
]);

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
