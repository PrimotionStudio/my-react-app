import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {
	const [events, setEvents] = useState([
		{
			id: 1,
			title: 'Birthday',
			description: 'Lorem ipsum dolor sit amet.',
		},
		{ id: 2, title: 'Wedding', description: 'Lorem ipsum dolor sit amet.' },
		{ id: 3, title: 'Burial', description: 'Lorem ipsum dolor sit amet.' },
	]);
	const [toggleEvents, setToggleEvents] = useState(true);

	const deleteEvent = (eventId) => {
		setEvents((currentEvents) => {
			const remainingEvents = currentEvents.filter(
				(event) => event.id !== eventId
			);
			return remainingEvents;
		});
	};
	// console.log(toggleEvents);
	// setToggleEvents(toggleEvents);
	const showEvents = (e) => {
		setToggleEvents(true);
	};
	const hideEvents = (e) => {
		setToggleEvents(false);
	};
	return (
		<div className='App'>
			<Header />
			<h2 className='my-events'>
				<p>My Events - Event Count: {events.length}</p>
				{toggleEvents && (
					<button onClick={hideEvents}>Hide Events</button>
				)}
				{!toggleEvents && (
					<button onClick={showEvents}>Show Events</button>
				)}
			</h2>
			{toggleEvents &&
				events.map((event, index) => (
					<div key={event.id} className='event'>
						<h3>
							{index} - {event.title}
						</h3>
						<p>{event.description}</p>
						<button onClick={() => deleteEvent(event.id)}>
							Delete Event
						</button>
					</div>
				))}
		</div>
	);
}

export default App;
