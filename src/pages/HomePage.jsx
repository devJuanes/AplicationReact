import React from "react";
import { Link } from "react-router-dom";
import "./../styles.css"; // Importa los estilos CSS

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div className="home-page">
        <div className="page-content">
          <h1>Bienvenido al sistema de gestión de eventos</h1>
          <div className="cta-buttons">
            <Link to="/create-event" className="btn btn-primary">
              Crear nuevo evento
            </Link>
            <Link to="/events" className="btn btn-secondary">
              Ver lista de eventos
            </Link>
          </div>
          <section className="app-description card">
            <p>
              Este sistema te permite crear y administrar eventos de manera
              sencilla. Ya sea que estés organizando conferencias, conciertos,
              reuniones familiares o cualquier otro tipo de evento, esta
              aplicación te ayudará a mantener todo bajo control.
            </p>
          </section>
          
        </div>
      </div>
      <footer className="footer">
        <p>Event Management System</p>
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
