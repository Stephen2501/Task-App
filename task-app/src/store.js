import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasks from "./reducers/taskReducer";
import links from "./reducers/linkReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'base',
  storage,
}

const rootReducer = combineReducers({
	tasks,
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
