import './TodoForm.css'

export const TodoForm = () => {
  return (
    <form className='todo-form'>
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
      <fieldset className='todo-form__section todo-form__sectio--row'>
        <div className='todo-form__input'>
          <label htmlFor=''>Descipcion  </label>
          <textarea name='description' id='' cols='' rows='' />
        </div>
      </fieldset>
      <button type='submit'>Añadir</button>
    </form>
  )
}
