import React from "react";
import { useSelector } from "react-redux";
import dateFormat from "../utils/dateFormat";
import { completeDailyTask } from "../actions/dailyTaskAction";
import { useDispatch } from "react-redux";

const Tasks = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleDailyToggle = (id) => {
		dispatch(completeDailyTask(id));
	};

	return (
		<div>
			<div>
				<h2>Daily tasks</h2>
				<ul>
					{state.dailyTasks.daily.map((task) => {
						return (
							<div key={task.id} className={task.completed ? 'completed' : 'uncompleted'} onClick={() => handleDailyToggle(task.id)}>
								<li>
									{task.task}
									{task.timestamp && <div>by: {task.timestamp}</div>}
								</li>
							</div>
						);
					})}
				</ul>
			</div>
			<div>
				<h2>Weekly tasks</h2>
				<ul>
					{state.weeklyTasks.weekly.map((task) => {
						return (
							<li>
								{task.task}
								<div>on {task.day}</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<h2>Custom tasks</h2>
				<ul>
					{state.customTasks.custom.map((task) => {
						return (
							<li>
								{task.task}
								<div>
									by {dateFormat(task.date)} at {task.timestamp}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Tasks;
