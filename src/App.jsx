import { useState } from "react";
import "./App.css";

function App() {
	const [isSetupComplete, setIsSetupComplete] = useState(false);
	const [isDone, setIsDone] = useState(false);
	const [habit, setHabit] = useState("");

	return (
		<>
			<h1 className="text-gradient">One Day Habit Tracker</h1>
			{isSetupComplete ? (
				<>
					<h2>
						Did you <span className="text-gradient">{habit}</span>{" "}
						today?
					</h2>
					{isDone ? (
						<p>Woohoo! Come back tomorrow.</p>
					) : (
						<button onClick={() => setIsDone(true)}>Yes</button>
					)}
				</>
			) : (
				<form onSubmit={() => setIsSetupComplete(true)}>
					<h2>
						I want to{" "}
						<input
							type="text"
							value={habit}
							onChange={(e) => setHabit(e.target.value)}
						/>{" "}
						everyday.
					</h2>
					<button>Start</button>
				</form>
			)}
		</>
	);
}

export default App;
