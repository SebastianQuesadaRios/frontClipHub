import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import Dashboard from './components/Dashboard'; // Importa el componente Dashboard
import VideoPlayer from './components/VideoPlayer'; // Importa el componente VideoPlayer

function App() {
    const [userId, setUserId] = useState(null);
    const [videos, setVideos] = useState([]); // Estado para almacenar los videos

    const handleLogin = (userId) => {
        console.log("Usuario logueado con ID:", userId);
        setUserId(userId);
    };

    // Cargar los videos desde el backend
    useEffect(() => {
        fetch('http://tu-api-url/videos') // Cambia "http://tu-api-url/videos" por tu endpoint real
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error('Error al cargar los videos:', error));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Forms callback={handleLogin} />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/upload-video" element={<UploadVideo />} />
                {/* Pasa los videos como prop al Dashboard */}
                <Route path="/dashboard" element={<Dashboard videos={videos} />} />
                {/* Ruta para reproducir un video específico */}
                <Route path="/video/:videoId" element={<VideoPlayer videos={videos} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



