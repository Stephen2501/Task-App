import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDailyTask} from "../actions/dailyTaskAction";
import { addWeeklyTask, deleteWeeklyTask } from "../actions/weeklyTaskAction";
import { addCustomTask, deleteCustomTask } from "../actions/customTaskAction";
import Form from "./Form";

export default function Settings() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const inputEl2 = useRef(null);
	const inputEl3 = useRef(null);

	console.log(state)

	const handleWeeklySubmit = (e) => {
		e.preventDefault();
		const value = inputEl2.current.value;
		dispatch(addWeeklyTask(value));
		inputEl2.current.value = "";
	};

	const handleWeeklyDelete = (task) => {
		dispatch(deleteWeeklyTask(task));
	};

	const handleCustomSubmit = (e) => {
		e.preventDefault();
		const value = inputEl3.current.value;
		dispatch(addCustomTask(value));
		inputEl3.current.value = "";
	};

	const handleCustomDelete = (task) => {
		dispatch(deleteCustomTask(task));
	};

	return (
		<div>
			<h2>Add daily task</h2>
			<Form/>
			<h2>Daily Tasks</h2>
			<ul>
				{state.dailyTasks.daily.map((task) => {
					return(
						<li key={task.id}>
							<div>{task.task}</div>
							<div>by: {task.timestamp}</div>
							</li>
					)
				})}
			</ul>
			<div className="tasks">
			</div>
			<div className="tasks">
				<h2>Weekly tasks</h2>
				<form>
					<input
						ref={inputEl2}
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
						ref={inputEl3}
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
