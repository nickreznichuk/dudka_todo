import React from 'react';
import '../../index.scss';
import {bool, func, shape, string} from "prop-types";

const ToDoItem = ({item: {id, value, done}, removeItem, checkItem}) => {
	return (
		<div className="to-do-item-container">
			<input className="to-do-item-done" id={`done_checkbox_${id}`} type="checkbox" onChange={() => checkItem(id)} checked={done} />
			<label htmlFor={`done_checkbox_${id}`} className="to-do-item-name">{value}</label>
			<span className="to-do-item-trash-icon" onClick={() => removeItem(id)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="4" viewBox="0 0 10 4" fill="none">
					<path d="M8.9375 1.5H6.875V1.125C6.875 0.503672 6.37133 0 5.75 0H4.25C3.62867 0 3.125 0.503672 3.125 1.125V1.5H1.0625C0.544742 1.5 0.125 1.91974 0.125 2.4375V3.1875C0.125 3.39462 0.292883 3.5625 0.5 3.5625H9.5C9.70712 3.5625 9.875 3.39462 9.875 3.1875V2.4375C9.875 1.91974 9.45526 1.5 8.9375 1.5ZM3.875 1.125C3.875 0.918281 4.04328 0.75 4.25 0.75H5.75C5.95672 0.75 6.125 0.918281 6.125 1.125V1.5H3.875V1.125Z" fill="#66686B"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
					<path d="M0.836665 0.3125C0.769751 0.3125 0.716431 0.368422 0.719618 0.435266L1.02899 6.92844C1.05759 7.52938 1.55118 8 2.15259 8H7.84743C8.44884 8 8.94243 7.52938 8.97102 6.92844L9.2804 0.435266C9.28359 0.368422 9.23027 0.3125 9.16335 0.3125H0.836665ZM6.50001 1.25C6.50001 1.04281 6.66782 0.875 6.87501 0.875C7.0822 0.875 7.25001 1.04281 7.25001 1.25V6.125C7.25001 6.33219 7.0822 6.5 6.87501 6.5C6.66782 6.5 6.50001 6.33219 6.50001 6.125V1.25ZM4.62501 1.25C4.62501 1.04281 4.79282 0.875 5.00001 0.875C5.2072 0.875 5.37501 1.04281 5.37501 1.25V6.125C5.37501 6.33219 5.2072 6.5 5.00001 6.5C4.79282 6.5 4.62501 6.33219 4.62501 6.125V1.25ZM2.75001 1.25C2.75001 1.04281 2.91782 0.875 3.12501 0.875C3.3322 0.875 3.50001 1.04281 3.50001 1.25V6.125C3.50001 6.33219 3.3322 6.5 3.12501 6.5C2.91782 6.5 2.75001 6.33219 2.75001 6.125V1.25Z" fill="#66686B"/>
				</svg>
			</span>
		</div>
	);
};

ToDoItem.propTypes = {
	item: shape({
		id: string.isRequired,
		value: string.isRequired,
		done: bool.isRequired,
	}).isRequired,
	removeItem: func.isRequired,
	checkItem: func.isRequired,
};

export default ToDoItem;