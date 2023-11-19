import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login.jsx'
import { TodoPage } from '../pages/TodoPage.jsx'
import { Layout } from '../components/Layout/Layout.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: TodoPage
      },
      {
        path: 'login',
        Component: Login
      }
    ]
  }
])
