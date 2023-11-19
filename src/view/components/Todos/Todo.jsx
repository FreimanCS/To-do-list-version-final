import './Todo.css'
import { useContext } from 'react'
import { TodosContext } from '../../../context/todo'

export const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodosContext)

  const handleDelete = () => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo/' + todo._id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.alert('Se elimino esa retromonda llamada' + response.todo.name)
        setTodos(todos.filter(todo => todo._id !== response.todo._id))
      })
  }
  return (
    <tr>
      <td>{todo.name}</td>
      <td>{todo.finishDate}</td>
      <td>{todo.isCompleted}</td>
      <td>
        <button>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  )
}
