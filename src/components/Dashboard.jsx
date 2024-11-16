import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que el archivo Navbar esté en el mismo directorio o ajusta la ruta

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Bienvenido a tu Dashboard</h1>
                <p>Aquí encontrarás toda la información y herramientas disponibles.</p>
            </div>
        </div>
    );
}

export default Dashboard;
