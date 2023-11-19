import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { TodoProvider } from '../context/todo'

function App () {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  )
}
export default App
