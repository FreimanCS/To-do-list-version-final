import './Todo.css'

export const Todo = ({ todo }) => {
  return (
    <tr>
      <td>{todo.task}</td>
      <td>{todo.date}</td>
      <td>{todo.status}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  )
}
