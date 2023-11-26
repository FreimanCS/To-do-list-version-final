import './LoginForm.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TodosContext } from '../../../context/todo'

export const LoginForm = () => {
  const { state, setState } = useContext(TodosContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}

    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        setState([...state, response.user])
        setState({ ...state, currentUser: response.user })
        event.target.reset()
      })
  }
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h2 className='login-form__title'>No dudamos que seas tu, bueno... quizas un poco</h2>
      <fieldset className='todo-form__section'>
        <div className='login-form__input'>
          <label htmlFor=''>Correo</label>
          <input type='text' name='email' required />
        </div>
        <div className='login-form__input'>
          <label htmlFor=''>Contraseña</label>
          <input type='password' name='password' required />
        </div>
      </fieldset>
      <button className='login-form__button' type='submit'>Iniciar sesión</button>
      <h3 className='login-form__subtitle'>¿No tienes una cuenta? ESTUPIDO! JAJAJAJA. <Link to='/signup' className='login-form__subtitle__link'>Registrate aquí.</Link> </h3>
    </form>

  )
}
