export default function EventList({events, deleteEvent}) {
  return (events.map((event, index) => (
					<div key={event.id} className='event'>
						<h3>
							{index} - {event.title}
						</h3>
						<p>{event.description}</p>
						<button onClick={() => deleteEvent(event.id)}>
							Delete Event
						</button>
					</div>
				))
  )
}
