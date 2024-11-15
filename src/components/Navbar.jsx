import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación sin recargar la página
import './styles/Navbar.css';

function Navbar() {
    // Función de cierre de sesión
    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión, por ejemplo, eliminando un token o limpiando el estado
        console.log('Cerrando sesión...');
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = '/'; // Redirige a la página de inicio de sesión
    };

    return (
        <div className="navbar">
            <div className="logo">
                ClipHub {/* Nombre de la aplicación */}
            </div>

            {/* Barra de búsqueda en el centro */}
            <div className="search-bar">
                <input type="text" placeholder="Buscar videos..." />
            </div>

            {/* Enlaces a la derecha */}
            <div className="nav-links">
                <Link to="/Home">Inicio</Link> {/* Enlace a la página principal */}
                <Link to="/upload-video">Subir Video</Link> {/* Enlace a la página de subir video */}
                <Link to="#" onClick={handleLogout}>Cerrar Sesión</Link> {/* Enlace para cerrar sesión */}
            </div>
        </div>
    );
}

export default Navbar;



