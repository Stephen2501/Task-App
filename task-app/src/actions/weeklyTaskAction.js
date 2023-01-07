import {
	ADD_WEEKLY_TASK,
	DELETE_WEEKLY_TASK,
	COMPLETE_WEEKLY_TASK,
} from "../actionTypes/actionTypes";

const addWeeklyTask = (task, id, timestamp, day, completed) => {
	return {
		type: ADD_WEEKLY_TASK,
		payload: {
			task,
			id,
			timestamp,
			day,
			completed,
		},
	};
};

const deleteWeeklyTask = (id) => ({
	type: DELETE_WEEKLY_TASK,
	payload: id,
});

function completeWeeklyTask(id) {
	return {
		type: COMPLETE_WEEKLY_TASK,
		payload: id,
	};
}

export { addWeeklyTask, deleteWeeklyTask, completeWeeklyTask };
