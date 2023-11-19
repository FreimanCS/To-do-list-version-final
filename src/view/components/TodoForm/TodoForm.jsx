import { useContext } from 'react'
import './TodoForm.css'
import { TodosContext } from '../../../context/todo'

export const TodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}

    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        /* Esta marimonda no funciona, sale un error en el API :/ */
        window.alert('Se creo la tarea: ' + response.todo.name)
        setTodos([...todos, response.todo])
        event.target.reset()
      })
  }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <h2 className='todo-form__title'>Añadir una tarea</h2>
      <fieldset className='todo-form__section'>
        <div className='todo-form__input'>
          <label htmlFor=''>Tarea</label>
          <input type='text' name='task' required />
        </div>
        <div className='todo-form__input'>
          <label htmlFor=''>Fecha</label>
          <input type='date' name='date' required />
        </div>
        <div className='todo-form__input'>
          <label htmlFor=''>Status</label>
          <input type='text' name='status' required />
        </div>
      </fieldset>
      <fieldset className='todo-form__section todo-form__section--row'>
        <div className='todo-form__input'>
          <label htmlFor=''>Descipcion  </label>
          <textarea name='description' id='' cols='' rows='' />
        </div>
      </fieldset>
      <button type='submit'>Añadir</button>
    </form>
  )
}
