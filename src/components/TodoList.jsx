import React from 'react'
import TodoCard from './TodoCard'

/**
 * A function component representing a list of todos.
 *
 * @param {Object} props - The props object containing todos.
 * @return {JSX.Element} The JSX element representing the todo list.
 */
export default function TodoList(props) {

    const { todos } = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
