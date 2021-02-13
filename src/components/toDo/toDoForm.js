import React, { useState } from 'react';
import {func} from 'prop-types';
import '../../index.scss';

const ToDoForm = ({ addItem }) => {
	const [name, setName] = useState('');
	return (
		<div className="to-do-container">
			<div className="add-form-container">
				<label htmlFor="itemInput">Название задачи</label>
				<input onChange={e => setName(e.target.value)} id="itemInput" type="text"/>
			</div>
			<div className='add-button' onClick={() => addItem(name)}>Добавить</div>
		</div>
	);
};

ToDoForm.propTypes = {
	addItem: func.isRequired,
};

export default ToDoForm;

