import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";
import TodoList from "./TodoList";

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo: id => dispatch(deleteTodo(id))
    };
}

export default connect(
    s => s,
    mapDispatchToProps
)(TodoList);