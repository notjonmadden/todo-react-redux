import React from 'react';

function Todo({ onCheckChange, onDeleteClick, isDone, text }) {
    return (
        <li>
            <input type="checkbox" checked={isDone} onChange={onCheckChange} />
            <label style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{text}</label>
            <a href="#" onClick={onDeleteClick}>(x)</a>
        </li>
    );
}

export default Todo;