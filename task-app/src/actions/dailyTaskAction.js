import { ADD_DAILY_TASK } from "../actionTypes/actionTypes";

const addDailyTask = (task, id, timestamp) => {
  return {
    type: ADD_DAILY_TASK,
    payload: {
        task,
        id,
        timestamp,
    }
  };
};


export { addDailyTask };