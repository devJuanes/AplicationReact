import React from 'react';
import EventList from '../components/EventList';
import { Link } from 'react-router-dom';

const EventListPage = () => {
    return (
        <div>
                            <Link to={"/create-event"} className="btn-primary">Crear Evento</Link>

            <EventList />
        </div>
    );
};

export default EventListPage;
