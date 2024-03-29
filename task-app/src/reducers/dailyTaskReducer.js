import {
	ADD_DAILY_TASK,
	DELETE_DAILY_TASK,
	COMPLETE_DAILY_TASK,
	RESET_DAILY_TASKS,
} from "../actionTypes/actionTypes";

const initialState = {
	daily: [],
};

export default function dailyTasks(state = initialState, action) {
	switch (action.type) {
		case ADD_DAILY_TASK:
			return {
				...state,
				daily: [...state.daily, action.payload],
			};
		case DELETE_DAILY_TASK:
			return {
				...state,
				daily: state.daily.filter((task) => task.id !== action.payload),
			};
		case COMPLETE_DAILY_TASK:
			return {
				...state,
				daily: state.daily.map((task) => {
					if (task.id === action.payload) {
						return {
							...task,
							completed: !task.completed,
						};
					}
					return task;
				}),
			};
		case RESET_DAILY_TASKS:
			return {
				...state,
				daily: state.daily.map((task) => ({ ...task, completed: false })),
			};
		default:
			return state;
	}
}
