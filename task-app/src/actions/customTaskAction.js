import { ADD_CUSTOM_TASK, DELETE_CUSTOM_TASK, COMPLETE_CUSTOM_TASK } from "../actionTypes/actionTypes";

const addCustomTask = (task, id, timestamp, date, completed) => {
  return {
    type: ADD_CUSTOM_TASK,
    payload: {
        task,
        id,
        timestamp,
        date,
        completed,
    }
  };
};

const deleteCustomTask = (id) => ({
  type: DELETE_CUSTOM_TASK,
  payload: id,
});

function completeCustomTask(id) {
  return {
    type: COMPLETE_CUSTOM_TASK,
    payload: id,
  };
}


export { addCustomTask, deleteCustomTask, completeCustomTask };