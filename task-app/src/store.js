import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import taskReducer from "./reducers/taskReducer";

const reducer = combineReducers({
	taskReducer,
});

const store = configureStore({
	reducer,
});

export default store;
