import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login.jsx'
import { TodoPage } from '../pages/TodoPage.jsx'
import { Layout } from '../components/Layout/Layout.jsx'
import { SignUp } from '../pages/SignUp.jsx'

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
      },
      {
        path: 'signup',
        Component: SignUp
      }
    ]
  }
])
