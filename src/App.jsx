import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import Home from './components/Home'; // Asegúrate de importar el componente Home

function App() {
    const [userId, setUserId] = useState(null);

    const handleLogin = (userId) => {
        console.log('Usuario logueado con ID:', userId);
        setUserId(userId);
    };

    const isAuthenticated = userId !== null; // Verifica si el usuario está autenticado

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={!isAuthenticated ? <Forms callback={handleLogin} /> : <Navigate to="/home" />}
                />
                <Route path="/registro" element={<Register />} />
                <Route
                    path="/home"
                    element={isAuthenticated ? <Home /> : <Navigate to="/" />}
                />
                <Route
                    path="/upload-video"
                    element={isAuthenticated ? <UploadVideo /> : <Navigate to="/" />}
                />
                <Route path="*" element={<Navigate to="/" />} /> {/* Ruta para manejar páginas no existentes */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

