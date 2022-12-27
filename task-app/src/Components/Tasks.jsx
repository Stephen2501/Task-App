import React from "react";
import { useSelector} from "react-redux";

const Tasks = () => {
	const state = useSelector((state) => state);

	return (
		<div>
			<h2>Daily tasks</h2>
			<ul>
				{state.dailyTasks.map((task, index) => {
					return (
						<li key={index}>
							{task}
						</li>
					);
				})}
			</ul>
            <h2>Weekly tasks</h2>
			<ul>
				{state.weeklyTasks.map((task, index) => {
					return (
						<li key={index}>
							{task}
						</li>
					);
				})}
			</ul>
            <h2>Custom tasks</h2>
			<ul>
				{state.customTasks.map((task, index) => {
					return (
						<li key={index}>
							{task}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Tasks;
