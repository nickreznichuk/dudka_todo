import React from 'react';
import '../../index.scss';
import {arrayOf, shape, string, bool, func} from 'prop-types';
import ToDoItem from './toDoItem';

const ToDoList = ({ toDoList, showAddForm, removeItem, checkItem }) => {
	return (
	<div className="to-do-container">
		<div className="to-do-item-list-container">
			{toDoList.map((item, index) =>
				<ToDoItem removeItem={removeItem} checkItem={checkItem} key={index} item={item} />
			)}
		</div>
		<div className='add-button' onClick={showAddForm()}>+ Новое задание</div>
	</div>
	);
};

ToDoList.propTypes = {
	toDoList: arrayOf(shape({
		id: string.isRequired,
		value: string.isRequired,
		done: bool.isRequired,
	})).isRequired,
	showAddForm: func.isRequired,
	removeItem: func.isRequired,
	checkItem: func.isRequired,
};

export default ToDoList;