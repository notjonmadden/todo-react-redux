import React from 'react';
import { connect } from 'react-redux';
import { beginEntry, addTodo } from '../actions';

function TodoEntry({ entering, dispatch }) {
    let ref;

    if (!entering) {
        return <a href="#" onClick={() => dispatch(beginEntry())}><i>Add item...</i></a>;
    }

    ref = React.createRef();

    return (
        <div>
            <input type="text" placeholder="Wow look at you, fancy boi" ref={ref}/>
            <button onClick={() => dispatch(addTodo(ref.current.value))}>Add</button>
        </div>
    )
}

export default connect(s => s)(TodoEntry);