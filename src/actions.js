export const SET_TEXT = 'SET_TEXT';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO_ORDER = 'SET_TODO_ORDER';
export const BEGIN_ENTRY = 'BEGIN_ENTYRY';

let nextId = 0;

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function setText(text, id) {
    return {
        type: SET_TEXT,
        text,
        id
    };
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
        id: nextId++
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

export function setTodoOrder(index, id) {
    return {
        type: SET_TODO_ORDER,
        index,
        id
    };
}

export function beginEntry() {
    return {
        type: BEGIN_ENTRY
    };
}