import React from "react";
import { useSelector } from "react-redux";
import dateFormat from "../utils/dateFormat";
import { completeDailyTask } from "../actions/dailyTaskAction";
import { useDispatch } from "react-redux";
import { completeWeeklyTask } from "../actions/weeklyTaskAction";
import { resetDailyTasks } from "../actions/dailyTaskAction";
import { completeCustomTask } from "../actions/customTaskAction";

const Tasks = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleDailyToggle = (id) => {
		dispatch(completeDailyTask(id));
	};

	const handleWeeklyToggle = (id) => {
		dispatch(completeWeeklyTask(id));
	};

	const handleCustomToggle = (id) => {
		dispatch(completeCustomTask(id));
	};

	function scheduleReset() {
		// Get the current time
		const now = new Date();

		// Set the time for the next 4am
		let nextReset = new Date(now);
		nextReset.setHours(9, 30, 0, 0);
		// If the current time is after 4am, set the time for 4am on the next day
		if (now.getTime() > nextReset.getTime()) {
			nextReset.setDate(nextReset.getDate() + 1);
		}
		console.log('resetting')
		// Set an interval to run the reset action at the next 4am
		setInterval(() => {
			dispatch(resetDailyTasks());
		}, 86400000);
	}

	scheduleReset();

	return (
		<div>
			<div>
				<h2>Daily tasks</h2>
				<ul>
					{state.dailyTasks.daily.map((task) => {
						return (
							<div
								key={task.id}
								className={task.completed ? "completed" : "uncompleted"}
								onClick={() => handleDailyToggle(task.id)}
							>
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
							<div
								key={task.id}
								className={task.completed ? "completed" : "uncompleted"}
								onClick={() => handleWeeklyToggle(task.id)}
							>
								<li>
									{task.task}
									<div>on {task.day}</div>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
			<div>
				<h2>Custom tasks</h2>
				<ul>
					{state.customTasks.custom.map((task) => {
						return (
							<div
								key={task.id}
								className={task.completed ? "completed" : "uncompleted"}
								onClick={() => handleCustomToggle(task.id)}
							>
								<li>
									{task.task}
									<div>
										by {dateFormat(task.date)} at {task.timestamp}
									</div>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Tasks;
