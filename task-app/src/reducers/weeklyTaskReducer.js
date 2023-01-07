import {
	ADD_WEEKLY_TASK,
	DELETE_WEEKLY_TASK,
	COMPLETE_WEEKLY_TASK,
} from "../actionTypes/actionTypes";

const initialState = {
	weekly: [],
};

export default function weeklyTasks(state = initialState, action) {
	switch (action.type) {
		case ADD_WEEKLY_TASK:
			return {
				...state,
				weekly: [...state.weekly, action.payload],
			};
		case DELETE_WEEKLY_TASK:
			return {
				...state,
				weekly: state.weekly.filter((task) => task.id !== action.payload),
			};
		case COMPLETE_WEEKLY_TASK:
			return {
				...state,
				weekly: state.weekly.map((task) => {
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
