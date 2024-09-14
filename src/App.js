import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('Prime');
	const [events, setEvents] = useState([
		{
			id: 1,
			title: 'Birthday',
			description: 'Lorem ipsum dolor sit amet.',
		},
		{ id: 2, title: 'Wedding', description: 'Lorem ipsum dolor sit amet.' },
		{ id: 3, title: 'Burial', description: 'Lorem ipsum dolor sit amet.' },
	]);

	const changeName = (e) => {
		const newName = prompt("What's your new name", name);
		setName(newName);
	};

	const deleteEvent = (eventId) => {
		const remainingEvents = events.filter((event) => event.id !== eventId);
		setEvents(remainingEvents);
	};
	return (
		<div className='App'>
			<h1>My name is {name}</h1>
			<button onClick={changeName}>Change Name</button>

			{events.map((event, index) => (
				<div key={event.id}>
					<h3>
						{index} - {event.title}
					</h3>
					<p>{event.description}</p>
					<button onClick={() => deleteEvent(event.id)}>
						Delete Event
					</button>
					<hr></hr>
				</div>
			))}
		</div>
	);
}

export default App;
