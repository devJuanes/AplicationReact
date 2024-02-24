import React, { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';
import EventCard from './EventCard'; // Importa el componente EventCard
import { Link } from 'react-router-dom';
import "./../styles.css"; // Importa los estilos CSS

const EventList = () => {
    const { state } = useContext(EventContext);

    return (
        <div className="event-list">
            <div className="banner">
                <h1>Bienvenido a la Lista de Eventos</h1>
                <p>Explora los eventos disponibles y encuentra el próximo que te interese.</p>
            </div>
            <div>
                <br /><br /><br /><br /><br /><br />
                <div className="create-event-button-container">
                <Link to={"/create-event"} className="btn-primary">Crear Evento</Link>
                </div>
            </div>
            <div className="event-cards">
                {state.events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <footer className="footer">
                <p>&copy; 2024 Event Management System. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default EventList;
