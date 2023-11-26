import { useEffect, useContext } from 'react'
import { Container } from '../components/Container/Container.jsx'
import { TodoList } from '../components/TodoList/TodoList.jsx'
import { TodosContext } from '../../context/todo.jsx'
import { TodoForm } from '../components/TodoForm/TodoForm.jsx'

export const TodoPage = () => {
  const { state, setState } = useContext(TodosContext)

  useEffect(() => {
    fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo')
      .then(response => response.json())
      .then(response => setState({ ...state, todos: response.todos }))
  }, [])
  return (
    <Container>
      <TodoForm />
      <TodoList todos={state.todos} />
    </Container>
  )
}
