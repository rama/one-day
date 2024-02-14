import { useState } from "react";
import "./App.css";

function App() {
	const [done, setDone] = useState(false);

	return (
		<>
			<h1>One and Done Habit Tracker</h1>
			<h2>Did you brush today?</h2>

			{done ? (
				<p>Woohoo! Come back tomorrow.</p>
			) : (
				<button onClick={() => setDone(() => true)}>Yes</button>
			)}
		</>
	);
}

export default App;
