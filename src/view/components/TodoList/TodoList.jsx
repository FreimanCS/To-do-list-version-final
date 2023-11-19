import { Todo } from '../Todos/Todo.jsx'
import './TodoList.css'

export const TodoList = ({ todos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Fecha</th>
          <th>Status</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
            todos && todos.map(todo => (<Todo key={todo._id} todo={todo} />
            ))
        }
      </tbody>
    </table>

  )
}
