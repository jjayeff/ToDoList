import React from 'react'

const Todo = (props) => (
    <h1>{props.list.map((name, index) => <li key={index}>{name}</li>)}</h1>
)

export default Todo