import {
	ADD_CUSTOM_TASK,
	DELETE_CUSTOM_TASK,
	COMPLETE_CUSTOM_TASK,
} from "../actionTypes/actionTypes";

const initialState = {
	custom: [],
};

export default function customTasks(state = initialState, action) {
	switch (action.type) {
		case ADD_CUSTOM_TASK:
			return {
				...state,
				custom: [...state.custom, action.payload],
			};
		case DELETE_CUSTOM_TASK:
			return {
				...state,
				custom: state.custom.filter((task) => task.id !== action.payload),
			};
		case COMPLETE_CUSTOM_TASK:
			return {
				...state,
				custom: state.custom.map((task) => {
					if (task.id === action.payload) {
						return {
							...task,
							completed: !task.completed,
						};
					}
					return task;
				}),
			};

		default:
			return state;
	}
}
