import { ADD_CUSTOM_TASK, DELETE_CUSTOM_TASK } from "../actionTypes/actionTypes";

export default function tasks(state = [], action) {
	switch (action.type) {
		case ADD_CUSTOM_TASK:
			return [...state, action.value];
		case DELETE_CUSTOM_TASK:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];
		default:
			return state;
	}
}