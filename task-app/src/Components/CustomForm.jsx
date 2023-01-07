import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addCustomTask } from "../actions/customTaskAction";
import "react-datepicker/dist/react-datepicker.css"

const CustomForm = () => {
	const [name, setName] = useState("");
	const [timestamp, setTimestamp] = useState("");
	const [date, setDate] = useState(new Date());
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = uuidv4();
		const completed = false
		dispatch(addCustomTask(name, id, timestamp, date, completed));
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
			<DatePicker selected={date} onChange={(date) => setDate(date)} />
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};

export default CustomForm;
