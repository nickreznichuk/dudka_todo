import { connect } from 'react-redux';
import ToDoForm from './component';
import { removeItem } from '../../actions/todo';

const mapDispatchToProps = dispatch => ({
	removeItem: toDoList => {
		localStorage.setItem('toDoList', '[]');
		dispatch(removeItem(toDoList));
	},
});

export default connect(null, mapDispatchToProps)(ToDoForm);