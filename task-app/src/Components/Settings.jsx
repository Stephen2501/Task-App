import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDailyTask, deleteDailyTask } from "../actions/dailyTaskAction";
import { addWeeklyTask, deleteWeeklyTask } from "../actions/weeklyTaskAction";
import { addCustomTask, deleteCustomTask } from "../actions/customTaskAction";

export default function Settings() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const inputEl = useRef(null);

	const handleDailySubmit = (e) => {
		e.preventDefault();
		const value = inputEl.current.value;
		dispatch(addDailyTask(value));
		inputEl.current.value = "";
	};

	const handleDailyDelete = (task) => {
		dispatch(deleteDailyTask(task));
	};

	const handleWeeklySubmit = (e) => {
		e.preventDefault();
		const value = inputEl.current.value;
		dispatch(addWeeklyTask(value));
		inputEl.current.value = "";
	};

	const handleWeeklyDelete = (task) => {
		dispatch(deleteWeeklyTask(task));
	};

	const handleCustomSubmit = (e) => {
		e.preventDefault();
		const value = inputEl.current.value;
		dispatch(addCustomTask(value));
		inputEl.current.value = "";
	};

	const handleCustomDelete = (task) => {
		dispatch(deleteCustomTask(task));
	};

	return (
		<div>
			<div className="tasks">
				<h2>Daily tasks</h2>
				<form>
					<input
						ref={inputEl}
						placeholder="add task"
						aria-label="add task"
					></input>
					<button onClick={handleDailySubmit}>Add task to list</button>
				</form>
				<ul>
					{state.dailyTasks.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<button onClick={() => handleDailyDelete(index)}>
									Delete Task
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="tasks">
				<h2>Weekly tasks</h2>
				<form>
					<input
						ref={inputEl}
						placeholder="add task"
						aria-label="add task"
					></input>
					<button onClick={handleWeeklySubmit}>Add task to list</button>
				</form>
				<ul>
					{state.weeklyTasks.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<button onClick={() => handleWeeklyDelete(index)}>
									Delete Task
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="tasks">
				<h2>Custom tasks</h2>
				<form>
					<input
						ref={inputEl}
						placeholder="add task"
						aria-label="add task"
					></input>
					<button onClick={handleCustomSubmit}>Add task to list</button>
				</form>
				<ul>
					{state.customTasks.map((task, index) => {
						return (
							<li key={index}>
								{task}
								<button onClick={() => handleCustomDelete(index)}>
									Delete Task
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
