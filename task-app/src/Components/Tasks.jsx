import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../actions/taskAction";

const Cart = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const inputEl = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = inputEl.current.value;
		dispatch(addTask(value));
		inputEl.current.value = "";
	};

	const handleDelete = (task) => {
		dispatch(deleteTask(task));
	};

	return (
		<div>
			<h2>Tasks</h2>
			<ul>
				{state.taskReducer.map((task, index) => {
					return (
						<li>
							{task}
							<button onClick={() => handleDelete(index)}>Delete Task</button>
						</li>
					);
				})}
			</ul>
			<form>
				<input
					ref={inputEl}
					placeholder="add task"
					aria-label="add task"
				></input>
				<button onClick={handleSubmit}>Add task to list</button>
			</form>
		</div>
	);
};

export default Cart;
