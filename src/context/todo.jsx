import { createContext, useState } from 'react'

export const TodosContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState()
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}
