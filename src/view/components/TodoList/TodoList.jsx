import { Todo } from '../Todos/Todo.jsx'
import './TodoList.css'

export const TodoList = ({ todos }) => {
  return (
    <table>
      <tbody>
        {
            todos && todos.map(todo => (<Todo key={todo._id} todo={todo} />
            ))
        }
      </tbody>
    </table>

  )
}
