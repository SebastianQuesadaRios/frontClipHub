import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo'; // Asegúrate de importar el componente UploadVideo


function App() {
    const [userId, setUserId] = useState(null);

    const handleLogin = (userId, role) => {
        console.log("Usuario logueado con ID:", userId); // Esto debería mostrar el ID
        setUserId(userId);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Forms callback={handleLogin} />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/upload-video" element={<UploadVideo />} /> {/* Ruta para subir video */}
                <Route path="*" element={<Navigate to="/" />} /> {/* Redirige cualquier ruta no definida a la página de inicio de sesión */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

