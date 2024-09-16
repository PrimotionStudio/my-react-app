import { useState } from 'react';
import '../assets/NewEventForm.css';

export default function NewEventForm() {
	const [eventTitle, setEventTitle] = useState('');
	const [eventDescription, setEventDescription] = useState('');
	const [eventDateTime, setEventDateTime] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form
			className='neweventform'
			action=''
			method='post'
			onSubmit={handleSubmit}
		>
			<h2>Add New Event</h2>
			<label>
				<span>Event Title:</span>
				<input
					type='text'
					id='title'
					onChange={(e) => setEventTitle(e.target.value)}
				/>
			</label>
			<label>
				<span>Description</span>
				<textarea
					name='description'
					id='description'
					cols='30'
					rows='10'
					onChange={(e) => setEventDescription(e.target.value)}
				></textarea>
			</label>
			<label>
				<span>Date/Time:</span>
				<input
					type='datetime-local'
					name='datetime'
					id='datetime'
					onChange={(e) => setEventDateTime(e.target.value)}
				/>
			</label>
			<button>Submit</button>
			<p>
				Title: {eventTitle} - Description: {eventDescription} -
				DateTime: {eventDateTime}
			</p>
		</form>
	);
}
