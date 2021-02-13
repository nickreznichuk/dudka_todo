import React, { Component } from 'react';
import '../../index.scss';
import NavBar from '../navBar';
import ToDo from '../toDo';

export default class App extends Component {
	render() {
		return (
      <div className="container">
				<NavBar />
				<ToDo />
      </div>
		);
	}
}