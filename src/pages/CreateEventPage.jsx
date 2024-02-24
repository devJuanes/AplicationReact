import React from 'react';
import CreateEvent from '../components/CreateEvent';
import { Link } from 'react-router-dom';

const CreateEventPage = () => {
    return (
        <div>
            <h2>Create Event Page</h2>
            <Link to={"/events"}>Eventos</Link>
            <CreateEvent />
        </div>
    );
};

export default CreateEventPage;
