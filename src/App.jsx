import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { EventProvider } from './contexts/EventContext';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventListPage from './pages/EventListPage';
import EventDetailsPage from './pages/EventDetailsPage';
import './styles.css'; // Importa los estilos CSS

function App() {
    return (
        <ChakraProvider>
            <EventProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create-event" element={<CreateEventPage />} />
                        <Route path="/events" element={<EventListPage />} />
                        <Route path="/event/:id" element={<EventDetailsPage />} />
                    </Routes>
                </Router>
            </EventProvider>
        </ChakraProvider>
    );
}

export default App;
