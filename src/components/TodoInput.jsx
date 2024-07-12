import React, { useState } from 'react'

/**
 * A function component representing an input field for adding todos.
 *
 * @param {Object} props - The props object containing handleAddTodos, todoValue, and setTodoValue.
 * @return {JSX.Element} The JSX element representing the input field for adding todos.
 */
export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('');
            }
            }>Add</button>
        </header>
    )
}
