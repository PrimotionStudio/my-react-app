import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
	const [showModal, setShowModal] = useState(false);
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
	const showEvents = (e) => {
		setToggleEvents(true);
	};
	const hideEvents = (e) => {
		setToggleEvents(false);
	};

	return (
		<div className='App'>
			<Header title={"Prime's Worldwide Event Centre"} />
			<h2 className='my-events'>
				<p>My Events - Event Count: {events.length}</p>
				<div>
					{toggleEvents && (
						<button onClick={hideEvents}>Hide Events</button>
					)}
					{!toggleEvents && (
						<button onClick={showEvents}>Show Events</button>
					)}
					<button onClick={() => setShowModal(true)}>
						Show Modal
					</button>
				</div>
			</h2>
			{toggleEvents && (
				<EventList events={events} deleteEvent={deleteEvent} />
			)}
			{showModal && (
				<Modal handleClose={() => setShowModal(false)}>
					<h2>Give Me Mula</h2>
					<p>Donate to support the development of Give Me Mula.</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Accusantium, blanditiis.
					</p>
				</Modal>
			)}
		</div>
	);
}

export default App;
