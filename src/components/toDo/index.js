import { connect } from 'react-redux';
import Component from './component';
import { addItem, removeItem, checkItem } from '../../actions/todo';

const mapStateToProps = ({
  todo: {
    toDoList,
  }
 }) => ({
 toDoList
});

const mapDispatchToProps = dispatch => ({
 addItem: toDoList => dispatch(addItem(toDoList)),
 removeItem: toDoList => dispatch(removeItem(toDoList)),
 checkItem: toDoList => dispatch(checkItem(toDoList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);