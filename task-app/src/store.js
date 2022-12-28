import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weeklyTasks from "./reducers/weeklyTaskReducer";
import customTasks from "./reducers/customTaskReducer";
import dailyTasks from "./reducers/dailyTaskReducer"
import links from "./reducers/linkReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'base',
  storage,
}

const rootReducer = combineReducers({
	weeklyTasks,
	customTasks,
  dailyTasks,
	links
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)

export default store;
