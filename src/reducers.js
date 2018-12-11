import * as Action from "./actions";
import { combineReducers } from "redux";

function isDone(state = false, action) {
    switch (action.type) {
        case Action.TOGGLE_TODO:
            return !state;
        default:
            return state;
    }
}

function text(state = '', action) {
    switch (action.type) {
        case Action.SET_TEXT:
            return action.text;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case Action.ADD_TODO:
            const { text, id } = action;
            return [...state, { text, id, isDone: false }];

        case Action.DELETE_TODO:
            return state.filter(t => t.id !== action.id);

        case Action.TOGGLE_TODO:
        case Action.SET_TEXT:
            return state.map(t => {
                if (t.id === action.id) {
                    return todo(t, action);
                } else {
                    return t;
                }
            });

        case Action.SET_TODO_ORDER:
            throw Error('not yet supported');

        default:
            return state;
    }
}

function entering(state = false, action) {
    switch (action.type) {
        case Action.BEGIN_ENTRY:
            return true;
        case Action.ADD_TODO:
            return false;
        default:
            return state;
    }
}

const todo = combineReducers({ isDone, text, id: (n = 0) => n });
export default combineReducers({ entering, todos });