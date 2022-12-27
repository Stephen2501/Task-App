import { ADD_TASK, DELETE_TASK } from "../actionTypes/actionTypes";

export default function tasks(state = [], action) {
	switch (action.type) {
		case ADD_TASK:
			return [...state, action.value];
		case DELETE_TASK:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];
		default:
			return state;
	}
}
