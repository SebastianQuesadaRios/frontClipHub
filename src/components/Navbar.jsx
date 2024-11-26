import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
    const handleLogout = () => {
        console.log('Cerrando sesión...');
        localStorage.clear();
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
                <Link to="/dashboard">Inicio</Link>
                <Link to="/upload-video">Subir Video</Link>
                <Link to="/perfil">Mi Perfil</Link> {/* Enlace al componente Perfil */}
                <Link to="#" onClick={handleLogout}>Cerrar Sesión</Link>
            </div>
        </div>
    );
}

export default Navbar;






