import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';
import './../styles.css'; // Importa los estilos CSS

const CreateEventPage = () => {
    return (
        <div className="page-content">
            <Banner />
            <h2>Página de Crear Evento</h2>
            <Link to={"/events"} className="back-link">Volver a Eventos</Link>
            <CreateEventForm />
            <Footer />
        </div>
    );
};

const Banner = () => {
    return (
        <div className="banner">
            <h1>Sistema de Gestión de Eventos</h1>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>Sistema de Gestión de Eventos</p>
            <p>&copy; 2024 Todos los derechos reservados.</p>
        </footer>
    );
};

const CreateEventForm = () => {
    const { dispatch } = useContext(EventContext);
    const [reservation, setReservation] = useState({
        id: '',
        name: '',
        date: '',
        place: '',
        numberOfPeople: 0,
    });

    const handleCreateEvent = () => {
        dispatch({ type: 'CREATE_EVENT', payload: reservation });
        setReservation({
            id: '',
            name: '',
            date: '',
            place: '',
            numberOfPeople: 0,
        });
    };

    return (
        <div className="create-event-form">
            <h2>Formulario de Crear Evento</h2>
            <Link to={"/events"} className="back-link">Volver a Eventos</Link>

            <input
                type="text"
                placeholder="Nombre del Evento"
                value={reservation.name}
                onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
            />
            <input
                type="date"
                value={reservation.date}
                onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
            />
            <input
                type="text"
                placeholder="Lugar del Evento"
                value={reservation.place}
                onChange={(e) => setReservation({ ...reservation, place: e.target.value })}
            />
            <input
                type="number"
                placeholder="Número de Personas"
                value={reservation.numberOfPeople}
                onChange={(e) => setReservation({ ...reservation, numberOfPeople: parseInt(e.target.value) })}
            />
            <button className="btn btn-primary" onClick={handleCreateEvent}>Crear Evento</button>
        </div>
    );
};

export default CreateEventPage;
