import React from 'react';
import './../styles.css'; // Importa los estilos CSS

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <p>Fecha: {event.date}</p>
            <p>Lugar: {event.place}</p>
            <p>Número de personas: {event.numberOfPeople}</p>
            {/* Otros detalles del evento */}
            
        </div>
        
    );
};

export default EventCard;
