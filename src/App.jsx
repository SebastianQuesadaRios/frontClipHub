import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo'; // Componente para subir video
import Home from './components/Home'; // Componente para la página principal que muestra los videos

function App() {
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate(); // Usamos el hook para la navegación

    // Función para manejar el login, asignando el userId después de la autenticación
    const handleLogin = (userId) => {
        console.log("Usuario logueado con ID:", userId); // Esto debería mostrar el ID
        setUserId(userId);
        navigate('/home'); // Redirigir al home después del login
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Página de login */}
                <Route index element={<Forms callback={handleLogin} />} />

                {/* Página de registro */}
                <Route path="/registro" element={<Register />} />

                {/* Ruta para la página principal (home) que muestra los videos */}
                <Route
                    path="/home"
                    element={userId ? <Home /> : <Navigate to="/" />} // Redirige si no está autenticado
                />

                {/* Ruta protegida para subir video */}
                <Route
                    path="/upload-video"
                    element={userId ? <UploadVideo /> : <Navigate to="/" />} // Redirige si no está autenticado
                />

                {/* Redirigir cualquier ruta no definida al login */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

