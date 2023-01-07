import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addWeeklyTask } from "../actions/weeklyTaskAction";

const WeeklyForm = () => {
	const [name, setName] = useState("");
	const [timestamp, setTimestamp] = useState("");
    const [day, setDay] = useState("")
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = uuidv4();
		const completed = false
		dispatch(addWeeklyTask(name, id, timestamp, day, completed));
		event.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				onChange={(event) => setName(event.target.value)}
			/>
			<br />
			<label htmlFor="timestamp">Complete by:</label>
			<input
				type="time"
				id="timestamp"
				name="complete by"
				onChange={(event) => setTimestamp(event.target.value)}
			/>
			<br />
			<label htmlFor="day">Day of the week:</label>
			<select
				id="day"
				name="day"
				onChange={(event) => setDay(event.target.value)}
			>
				<option value="Monday">Monday</option>
				<option value="Tuesday">Tuesday</option>
				<option value="Wednesday">Wednesday</option>
				<option value="Thursday">Thursday</option>
				<option value="Friday">Friday</option>
				<option value="Saturday">Saturday</option>
				<option value="Sunday">Sunday</option>
			</select>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};

export default WeeklyForm;
