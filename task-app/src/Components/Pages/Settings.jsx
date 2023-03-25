import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDailyTask } from "../../actions/dailyTaskAction";
import { deleteWeeklyTask } from "../../actions/weeklyTaskAction";
import { deleteCustomTask } from "../../actions/customTaskAction";
import DailyForm from "../Forms/DailyForm";
import WeeklyForm from "../Forms/WeeklyForm";
import CustomForm from "../Forms/CustomForm";
import dateFormat from "../../utils/dateFormat";

export default function Settings() {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleDailyDelete = (id) => {
		dispatch(deleteDailyTask(id));
	};

	const handleWeeklyDelete = (id) => {
		dispatch(deleteWeeklyTask(id));
	};

	const handleCustomDelete = (id) => {
		dispatch(deleteCustomTask(id));
	};

	return (
		<div>
			<div>
				<h2>Add daily task</h2>
				<DailyForm />
				<h2>Daily Tasks</h2>
				<ul>
					{state.dailyTasks.daily.map((task) => {
						return (
							<li key={task.id}>
								<div>{task.task}</div>
								{task.timestamp && <div>by: {task.timestamp}</div>}
								<button onClick={() => handleDailyDelete(task.id)}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<h2>Add weekly task</h2>
				<WeeklyForm />
				<h2>Weekly Tasks</h2>
				<ul>
					{state.weeklyTasks.weekly.map((task) => {
						return (
							<li key={task.id}>
								<div>{task.task}</div>
								<div>on {task.day}</div>
								<button onClick={() => handleWeeklyDelete(task.id)}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<h2>Add custom task</h2>
				<CustomForm />
				<h2>Custom Tasks</h2>
				<ul>
					{state.customTasks.custom.map((task) => {
						return (
							<li key={task.id}>
								<div>{task.task}</div>
								<div>
									by {dateFormat(task.date)} at {task.timestamp}
								</div>
								<button onClick={() => handleCustomDelete(task.id)}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
