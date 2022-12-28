import { ADD_CUSTOM_TASK, DELETE_CUSTOM_TASK } from "../actionTypes/actionTypes";

const addCustomTask = (task, id, timestamp, day) => {
  return {
    type: ADD_CUSTOM_TASK,
    payload: {
        task,
        id,
        timestamp,
        day,
    }
  };
};

const deleteCustomTask = (id) => ({
  type: DELETE_CUSTOM_TASK,
  payload: id,
});


export { addCustomTask, deleteCustomTask };