import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();

    return <div>Details of Event {id}</div>;
    
};

export default EventDetails;
