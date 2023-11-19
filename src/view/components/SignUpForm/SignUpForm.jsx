import './SignUpForm.css'
import { Link } from 'react-router-dom'

export const SignUpForm = () => {
  return (
    <form className='signup-form'>
      <h2 className='signup-form__title'>Binvenido perrito</h2>
      <fieldset className='signup-form__section'>
        <div className='signup-form__input'>
          <label htmlFor=''>Nombres</label>
          <input type='text' name='username' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Apellidos</label>
          <input type='text' name='username' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Correo</label>
          <input type='text' name='username' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Usuario</label>
          <input type='text' name='username' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Contraseña</label>
          <input type='password' name='password' required />
        </div>
        <div className='signup-form__input'>
          <label htmlFor=''>Confirmar contraseña</label>
          <input type='password' name='password' required />
        </div>
      </fieldset>
      <button className='signup-form__button' type='submit'>Crear cuenta</button>
      <h3 className='signup-form__subtitle'>¿Ya tienes una cuenta? Bien, bien. <Link to='/login'>Incia sesión aqui</Link> </h3>
    </form>

  )
}
