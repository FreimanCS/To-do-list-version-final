import './Todo.css'
import { useContext } from 'react'
import { TodosContext } from '../../../context/todo'
import { BsTrash3 } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'

export const Todo = ({ todo }) => {
  const { state, setState } = useContext(TodosContext)

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
        setState({ ...state, todos: state.todos.filter(todo => todo._id !== response.todo._) })
      })
  }
  return (
    <tr className='todo_display'>
      <td id='todo_name'>{todo.name}</td>
      <td id='todo_dscription'>{todo.description}</td>
      <td id='todo_date'>{todo.finishDate.split('T')[0]}</td>
      <td className='buttons'>
        <button onClick={() => setState({ ...state, currentTodo: todo })}><FaRegEdit className='edit-icon' /></button>
        <button onClick={handleDelete}><BsTrash3 className='trash-icon' /></button>
      </td>
    </tr>
  )
}
