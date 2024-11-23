import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import Dashboard from './components/Dashboard';
import VideoPlayer from './components/VideoPlayer';  // Importa el componente VideoPlayer

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
                <Route path="/video" element={<VideoPlayer />} />  {/* Ruta para VideoPlayer */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


