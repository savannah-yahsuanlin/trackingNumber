import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";


const App = () => {
	const [times, setTimes] = useState([])

	useEffect(() => {
		fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
			.then(response => response.json())
			.then(times => setTimes(times))
	}, [])
	return (
		<div>
			<h1>Tracking Number</h1>
      <h2>({ times.length })</h2>
			<ul>
				{
					times.map(time => {
						return (
							<li key={time.key}>
								{time.name}({ time.activities.length})
							</li>
						)
					})
				}
			</ul>
		</div>
	)
} 






const root = createRoot(document.querySelector('#app'));

root.render(<App />);