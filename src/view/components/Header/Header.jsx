import './Header.css'
import { Link } from 'react-router-dom'
import { LuListTodo } from 'react-icons/lu'

export const Header = () => {
  return (
    <header>
      <h1><Link to='/'><LuListTodo className='Todolist-icon' /></Link></h1>
      <ul>
        <li><Link to='/login'>Iniciar sesión</Link></li>
      </ul>
    </header>
  )
}
