import React from 'react'

/**
 * A function component representing a todo card.
 *
 * @param {Object} props - The props object containing children, handleDeleteTodo, index, and handleEditTodo.
 * @return {JSX.Element} The JSX element representing the todo card.
 */
export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
