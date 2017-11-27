import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, deleteTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      deleteTodo: id => dispatch(deleteTodo(id))
    };
  }
)(components.TodoList);
