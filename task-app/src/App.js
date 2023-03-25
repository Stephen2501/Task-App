import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Tasks from "./Components/Pages/Tasks";
import Settings from "./Components/Pages/Settings";
import Points from "./Components/Pages/Points";
import Completed from "./Components/Pages/Completed";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/points" element={<Points />} />
				<Route path="/completed" element={<Completed />} />
			</Routes>
		</Router>
	);
}

export default App;
