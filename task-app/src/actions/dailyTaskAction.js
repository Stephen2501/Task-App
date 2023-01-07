import { ADD_DAILY_TASK, DELETE_DAILY_TASK, COMPLETE_DAILY_TASK } from "../actionTypes/actionTypes";

const addDailyTask = (task, id, timestamp, completed) => {
  return {
    type: ADD_DAILY_TASK,
    payload: {
        task,
        id,
        timestamp,
        completed
    }
  };
};

const deleteDailyTask = (id) => ({
  type: DELETE_DAILY_TASK,
  payload: id,
});

function completeDailyTask(id) {
  return {
    type: COMPLETE_DAILY_TASK,
    payload: id,
  };
}

export { addDailyTask, deleteDailyTask, completeDailyTask };