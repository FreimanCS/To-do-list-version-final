// En tu TodoProvider
import React, { createContext, useState } from 'react'

export const TodosContext = createContext()

export const TodoProvider = ({ children }) => {
  const [state, setState] = useState({
    todos: [],
    currentTodo: null,
    currentUser: null
  })

  return (
    <TodosContext.Provider value={{ state, setState }}>
      {children}
    </TodosContext.Provider>
  )
}
