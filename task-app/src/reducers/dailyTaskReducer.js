import { ADD_DAILY_TASK, DELETE_DAILY_TASK } from "../actionTypes/actionTypes";

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
		default:
			return state;
	}
}
