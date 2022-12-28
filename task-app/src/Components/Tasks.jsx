import React from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
	const state = useSelector((state) => state);

	return (
		<div>
			<div>
				<h2>Daily tasks</h2>
				<ul>
					{state.dailyTasks.daily.map((task) => {
						return <li>{task.task}</li>;
					})}
				</ul>
			</div>
			<div>
				<h2>Weekly tasks</h2>
				<ul>
					{state.weeklyTasks.weekly.map((task) => {
						return <li>{task.task}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Tasks;
