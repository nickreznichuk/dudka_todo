import { 
	ADD_ITEM,
	REMOVE_ITEM,
	CHECK_ITEM,
} from '../constants/actionTypes';

export const addItem = toDoList => ({
	type: ADD_ITEM,
	toDoList
});

export const removeItem = toDoList => ({
	type: REMOVE_ITEM,
	toDoList
});

export const checkItem = toDoList => ({
	type: CHECK_ITEM,
	toDoList
});

