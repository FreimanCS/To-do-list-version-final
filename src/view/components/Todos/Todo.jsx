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
    <div className='todos_display'>
      <p id='todo_name'>{todo.name}</p>
      <p id='todo_date'>{todo.finishDate.split('T')[0]}</p>
      <div className='buttons'>
        <button id='edit_button' onClick={() => setState({ ...state, currentTodo: todo })}><FaRegEdit /></button>
        <button id='trash_button' onClick={handleDelete}><BsTrash3 /></button>
      </div>
    </div>
  )
}
