import React from "react";
import { BrowseRouter, Router } from "react-router-dom";
import Tasks from "./Components/Tasks";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Tasks />
			</div>
		</Router>
	);
}

export default App;
