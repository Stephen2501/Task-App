import { ADD_CUSTOM_TASK } from "../actionTypes/actionTypes";


const initialState = {
    custom: []
}

export default function customTasks(state = initialState, action) {

	switch (action.type) {
		case ADD_CUSTOM_TASK:
			return {
                ...state,
                custom: [...state.custom, action.payload]
            }
		default:
			return state;
	}
}