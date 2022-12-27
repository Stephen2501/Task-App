import { ADD_DAILY_TASK, DELETE_DAILY_TASK } from "../actionTypes/actionTypes";

const addDailyTask = (value) => {
  return {
    type: ADD_DAILY_TASK,
    value,
  };
};

const deleteDailyTask = (index) => {
  return {
    type: DELETE_DAILY_TASK,
    index,
  };
};

export { addDailyTask, deleteDailyTask };