import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Login } from '../pages/login.jsx'
import { Layout } from '../components/Layout/Layout.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  }
])
