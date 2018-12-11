import React from 'react';
import Todo from "./Todo";
import TodoEntry from './TodoEntry';

export default function ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map(t => <Todo key={t.id} { ...t } onDeleteClick={() => deleteTodo(t.id)} onCheckChange={() => toggleTodo(t.id)} />)}
            <li><TodoEntry /></li>
        </ul>
    );
}