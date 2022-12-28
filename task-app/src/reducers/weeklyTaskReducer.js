import { ADD_WEEKLY_TASK } from "../actionTypes/actionTypes";

const initialState = {
    weekly: []
}

export default function weeklyTasks(state = initialState, action) {

	switch (action.type) {
		case ADD_WEEKLY_TASK:
			return {
                ...state,
                weekly: [...state.weekly, action.payload]
            }
		default:
			return state;
	}
}
