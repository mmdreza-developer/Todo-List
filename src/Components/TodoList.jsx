import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState("")
    const [status, setStatus] = useState("All")
    const ChangeInput = (event) => {
        setTodoTitle(event.target.value)
    }
    const handleSubmited = (event) => {
        event.preventDefault()
        console.log(event)
        const newTodos = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false
        }
        setTodos(prevState => {
            return [...prevState, newTodos]
        })
        setTodoTitle("")

    }
    const handleCompleted = (todoID) => {
        const newTodos = [...todos]
        newTodos.forEach(todo => {
            if (todo.id === todoID) {
                return (todo.completed = !todo.completed)
            }
        })
        setTodos(newTodos)
    }
    const handleRemove = (todoID) => {
        const oldTodos = [...todos]
        const newTodos = oldTodos.filter(todo => {
            return todo.id !== todoID
        })
        setTodos(newTodos)
    }
    const changeSelect = (event) => {
        setStatus(event.target.value)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmited}>
                <Header />
                <div className="parentTodo">
                    <div className="addTodo">
                        <input type="text" value={todoTitle} onChange={ChangeInput} />
                        <button><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <select name="" id="" onChange={changeSelect}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="unCompleted">unCompleted</option>
                    </select>
                </div>
            </form>
            <div className="todoList">
                {todos.length > 0 && status === "All" && todos.map(todo => {
                    return (
                        <Todo key={todo.id} {...todo} complete={handleCompleted} Remove={handleRemove} />
                    )
                })}
                {todos.length > 0 && status === "Completed" && todos.filter(todo => {
                    return todo.completed
                }).map(todo => {
                    return (
                        <Todo key={todo.id} {...todo} complete={handleCompleted} Remove={handleRemove} />
                    )
                })}
                {todos.length > 0 && status === "unCompleted" && todos.filter(todo => {
                    return todo.completed === false
                }).map(todo => {
                    return (
                        <Todo key={todo.id} {...todo} complete={handleCompleted} Remove={handleRemove} />
                    )
                })}
            </div>
        </div>
    )
}
