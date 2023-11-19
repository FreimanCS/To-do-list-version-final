import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1><Link to='/'>Bitch!</Link></h1>
      <ul>
        <li><Link to='/login'>Iniciar sesión</Link></li>
      </ul>
    </header>
  )
}
