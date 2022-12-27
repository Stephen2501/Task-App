import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasks from "./reducers/taskReducer";
import links from "./reducers/linkReducer"

const reducer = combineReducers({
	tasks,
	links,
});

const store = configureStore({
	reducer,
});

export default store;
