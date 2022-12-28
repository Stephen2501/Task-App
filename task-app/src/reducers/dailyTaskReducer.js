import { ADD_DAILY_TASK } from "../actionTypes/actionTypes";

const initialState = {
    daily: []
}

export default function dailyTasks(state = initialState, action) {

	switch (action.type) {
		case ADD_DAILY_TASK:
			return {
                ...state,
                daily: [...state.daily, action.payload]
            }
		default:
			return state;
	}
}
