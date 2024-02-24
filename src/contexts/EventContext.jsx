import React, { createContext, useReducer } from 'react';
import eventReducer from '../reducers/eventReducer';

const EventContext = createContext();

const EventProvider = ({ children }) => {
    const initialState = {
        events: [],
    };
    const [state, dispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};

export { EventContext, EventProvider };
