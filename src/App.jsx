import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
function App() {
  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')

  /**
   * A function that persists the updated todo list to local storage.
   *
   * @param {Array} newList - The new todo list to be stored.
   * @return {void} 
   */
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  /**
   * A function that handles the addition of a new todo.
   *
   * @param {any} newTodo - The new todo item to be added.
   * @return {void} This function does not return anything.
   */
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList);
    setTodos(newTodoList);
  }


  /**
   * A function that handles the deletion of a todo item.
   *
   * @param {number} index - The index of the todo item to be deleted.
   * @return {void} This function does not return anything.
   */
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  /**
   * A function that handles editing a todo item.
   *
   * @param {number} index - The index of the todo item to be edited.
   * @return {void} This function does not return anything.
   */
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  /**
   * Renders the JSX elements for the TodoInput and TodoList components.
   *
   * @return {JSX.Element} The JSX elements for the TodoInput and TodoList components.
   */
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  )
}

export default App
