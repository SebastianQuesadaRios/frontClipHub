import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard
import VideoPlayer from './components/VideoPlayer'; // Importa el componente VideoPlayer

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
                <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para Dashboard */}
                <Route path="/video/:videoId" element={<VideoPlayer />} /> {/* Ruta para reproducir el video */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


