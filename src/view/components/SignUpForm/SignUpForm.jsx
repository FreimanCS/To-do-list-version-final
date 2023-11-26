import './SignUpForm.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodosContext } from '../../../context/todo'

export const SignUpForm = () => {
  const { todos, setTodos } = useContext(TodosContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}

    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        setTodos([...todos, response.todo])
        event.target.reset()
      })
  }
  return (
    <form onSubmit={handleSubmit} className='signup-form'>
      <h2 className='signup-form__title'>Bienvenido perrito</h2>
      <fieldset className='signup-form__section'>
        <div className='signup-form__input'>
          <label htmlFor=''>Nombres</label>
          <input type='text' name='firstName' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Apellidos</label>
          <input type='text' name='lastName' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Correo</label>
          <input type='text' name='email' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Contraseña</label>
          <input type='password' name='password' required />
        </div>
      </fieldset>
      <button className='signup-form__button' type='submit'>Crear cuenta</button>
      <h3 className='signup-form__subtitle'>¿Ya tienes una cuenta? Bien, bacano. <Link to='/login' className='signup-form__subtitle__link'>Inicia sesión aquí.</Link> </h3>
    </form>

  )
}
