import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Tasks from "./Components/Tasks";
import Settings from "./Components/Settings";
import Points from "./Components/Points"
import Completed from "./Components/Completed";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/points" element={<Points />} />
				<Route path="/completed" element={<Completed/>} />
			</Routes>
		</Router>
	);
}

export default App;
