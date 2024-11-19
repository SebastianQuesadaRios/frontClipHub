import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegación sin recarga
import './styles/Navbar.css';

function Navbar() {
    const handleLogout = () => {
        console.log('Cerrando sesión...');
        // Limpiar el localStorage
        localStorage.clear();
        // Redirigir a la página de inicio de sesión
        window.location.href = '/';
    };

    return (
        <div className="navbar">
            <div className="logo">
                ClipHub
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Buscar videos..." />
            </div>

            <div className="nav-links">
                <Link to="/dashboard">Inicio</Link> {/* Ruta para el Dashboard */}
                <Link to="/upload-video">Subir Video</Link>
                <Link to="#" onClick={handleLogout}>Cerrar Sesión</Link>
            </div>
        </div>
    );
}

export default Navbar;





