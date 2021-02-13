import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHECK_ITEM
} from '../constants/actionTypes';
const initialState = {
  toDoList: JSON.parse(localStorage.getItem('toDoList') || '[]'),
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM || REMOVE_ITEM || CHECK_ITEM: {
      return {
        ...state,
        toDoList: action.toDoList,
      };
    }
    default: {
      return state;
    }
  }
};

export default todo;