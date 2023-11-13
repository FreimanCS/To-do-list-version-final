import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Bitch!</h1>
      <ul>
        <li><Link to='/'>Bitch!</Link></li>
        <li><Link to='/login'>Bitch!2</Link></li>
      </ul>
    </header>
  )
}
