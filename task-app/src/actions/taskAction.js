import { ADD_TASK, DELETE_TASK } from "../actionTypes/actionTypes";

const addTask = (value) => {
  return {
    type: ADD_TASK,
    value,
  };
};

const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    index,
  };
};

export { addTask, deleteTask };