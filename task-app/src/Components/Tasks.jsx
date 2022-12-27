import React from "react";
import { useSelector} from "react-redux";

const Tasks = () => {
	const state = useSelector((state) => state);

	return (
		<div>
			<h2>Daily tasks</h2>
			<ul>
				{state.tasks.map((task, index) => {
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
