import { ADD_WEEKLY_TASK, DELETE_WEEKLY_TASK } from "../actionTypes/actionTypes";

const addWeeklyTask = (task, id, timestamp, day) => {
  return {
    type: ADD_WEEKLY_TASK,
    payload: {
        task,
        id,
        timestamp,
        day,
    }
  };
};

const deleteWeeklyTask = (id) => ({
  type: DELETE_WEEKLY_TASK,
  payload: id,
});


export { addWeeklyTask, deleteWeeklyTask };