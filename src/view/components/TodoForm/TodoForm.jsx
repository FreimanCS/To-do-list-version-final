import { useContext } from 'react'
import './TodoForm.css'
import { TodosContext } from '../../../context/todo'

export const TodoForm = () => {
  const { state, setState } = useContext(TodosContext)
  const text = state.currentTodo ? 'Guardar' : 'Crear'
  const createTodo = (body, target) => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((response) => {
        setState({ ...state, todos: [...state.todos, response.todo] })
        target.reset()
      })
      .catch((error) => {
        console.error('Error al agregar tarea:', error)
      })
  }
  const updateTodo = (body, target) => {
    body = { ...body, _id: state.currentTodo._id }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((response) => {
        const updatedIndex = state.todos.findIndex((todo) => todo._id === response.todo._id)
        state.todos[updatedIndex] = response.todo
        setState({ ...state, currentTodo: null })
        target.reset()
      })
      .catch((error) => {
        console.error('Error al actualizar tarea:', error)
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const body = {
      name: event.target.name.value,
      description: event.target.description.value,
      finishDate: event.target.finishDate.value,
      isCompleted: false, // Inicializamos como no completado al crear la tarea
      userId: '6562343868ec8c703f857851' // Pasamos el ID del usuario, no pude pasarsela de otra manera porque no se como
    }
    state.currentTodo ? updateTodo(body, event.target) : createTodo(body, event.target)
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <h2 className='todo-form__title'>{text} una tarea</h2>
      <fieldset className='todo-form__section'>
        <div className='todo-form__input'>
          <label htmlFor='name'>Tarea</label>
          <input type='text' name='name' required defaultValue={state.currentTodo ? state.currentTodo.name : ''} />
        </div>
        <div className='todo-form__input'>
          <label htmlFor='finishDate'>Fecha</label>
          <input type='date' name='finishDate' required defaultValue={state.currentTodo ? state.currentTodo.finishDate.split('T')[0] : ''} />
        </div>
        <div className='todo-form__input'>
          <label htmlFor='isCompleted'>Completado </label>
          <input type='checkbox' name='isCompleted' defaultValue={state.currentTodo ? state.currentTodo.isCompleted : ''} />
        </div>
      </fieldset>
      <fieldset className='todo-form__section todo-form__section--row'>
        <div className='todo-form__input'>
          <label htmlFor='description'>Descripción</label>
          <textarea name='description' id='description' cols='' rows='' defaultValue={state.currentTodo ? state.currentTodo.description : ''} />
        </div>
      </fieldset>
      <button type='submit'>{text}</button>
    </form>
  )
}
