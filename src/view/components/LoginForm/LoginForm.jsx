import './LoginForm.css'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <form className='login-form'>
      <h2 className='login-form__title'>No dudamos que seas tu, bueno... quizas un poco</h2>
      <fieldset className='todo-form__section'>
        <div className='login-form__input'>
          <label htmlFor=''>Usuario</label>
          <input type='text' name='username' required />
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
