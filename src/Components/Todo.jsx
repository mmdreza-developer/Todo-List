import React from 'react'

export default function Todo(props) {
    const handleCheck = (id) => {
        props.complete(id)
    }
    const handleRemove = (id) => {
        props.Remove(id)
    }
    return (
        <div className="todo">
            <li className={props.completed ? "completed" : ""}>{props.title}</li>
            <button onClick={() => handleCheck(props.id)} className="check"><i className="fa-solid fa-check"></i></button>
            <button onClick={() => handleRemove(props.id)} className="trush"><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}
