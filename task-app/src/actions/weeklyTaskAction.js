import { ADD_WEEKLY_TASK, DELETE_WEEKLY_TASK } from "../actionTypes/actionTypes";

const addWeeklyTask = (value) => {
  return {
    type: ADD_WEEKLY_TASK,
    value,
  };
};

const deleteWeeklyTask = (index) => {
  return {
    type: DELETE_WEEKLY_TASK,
    index,
  };
};

export { addWeeklyTask, deleteWeeklyTask };