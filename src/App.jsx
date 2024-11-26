import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import Dashboard from './components/Dashboard';
import VideoPlayer from './components/VideoPlayer';
import Perfil from './components/Perfil'; // Importa el componente Perfil

function App() {
    const [userId, setUserId] = useState(null);

    const handleLogin = (userId) => {
        console.log("Usuario logueado con ID:", userId);
        setUserId(userId);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Forms callback={handleLogin} />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/upload-video" element={<UploadVideo />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/video" element={<VideoPlayer />} />
                <Route path="/perfil" element={<Perfil />} /> {/* Nueva ruta para el perfil */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



