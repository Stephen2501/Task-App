import { ADD_CUSTOM_TASK, DELETE_CUSTOM_TASK } from "../actionTypes/actionTypes";

const addCustomTask = (value) => {
  return {
    type: ADD_CUSTOM_TASK,
    value,
  };
};

const deleteCustomTask = (index) => {
  return {
    type: DELETE_CUSTOM_TASK,
    index,
  };
};

export { addCustomTask, deleteCustomTask };