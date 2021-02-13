import React, { Component } from 'react';
import {arrayOf, bool, func, shape, string} from "prop-types";
import '../../index.scss';
import ToDoForm from './toDoForm';
import ToDoEmpty from './toDoEmpty';
import ToDoList from './toDoList';

export default class ToDo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showAddForm: false,
		}
	}

	toggleForm = () => {
		const { showAddForm } = this.state;
		this.setState({showAddForm: !showAddForm})
	}

	addItem = value => {
		const { toDoList, addItem } = this.props;
		const id = !toDoList[0] ? '0' :  (Math.max(...toDoList.map(item => item.id)) + 1).toString();
		toDoList.push({id, done: false, value})
		this.setState({showAddForm: false})
		addItem(toDoList);
		localStorage.setItem('toDoList', JSON.stringify(toDoList))
	}

	removeItem = id => {
		const { toDoList, removeItem } = this.props;
		toDoList.find((item, index) => {
			if (item.id === id) {
				toDoList.splice(index, 1);
				return true; // stop searching
			}
			return false;
		});
		removeItem(toDoList);
		localStorage.setItem('toDoList', JSON.stringify(toDoList))
		this.forceUpdate();
	}

	checkItem = id => {
		const { toDoList, checkItem } = this.props;
		toDoList.find((item, index) => {
			if (item.id === id) {
				toDoList[index].done = !toDoList[index].done;
				return true; // stop searching
			}
			return false;
		});
		checkItem(toDoList);
		localStorage.setItem('toDoList', JSON.stringify(toDoList))
		this.forceUpdate();
	}

	render() {
		const {showAddForm} = this.state;
		const {toDoList} = this.props;
		const toDoIsPresent = toDoList[0]

		return (
      <div className="to-do-wrapper">
				{showAddForm && <ToDoForm addItem={this.addItem} />}
				{(!showAddForm && !toDoIsPresent) && <ToDoEmpty showAddForm={() => this.toggleForm} />}
				{(!showAddForm && toDoIsPresent) && <ToDoList
																							showAddForm={() => this.toggleForm}
																							toDoList={toDoList}
																							removeItem={this.removeItem}
																							checkItem={this.checkItem}
																						/>}
      </div>
		);
	}
}

ToDo.propTypes = {
	toDoList: arrayOf(shape({
		id: string.isRequired,
		value: string.isRequired,
		done: bool.isRequired,
	})).isRequired,
	addItem: func.isRequired,
	removeItem: func.isRequired,
	checkItem: func.isRequired,
};