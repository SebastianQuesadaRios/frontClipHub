import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Forms from './components/Forms';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';  // Importa el componente para subir videos

function App() {
    const [userId, setUserId] = useState(null);

    const handleLogin = (userId) => {
        console.log("Usuario logueado con ID:", userId); // Esto debería mostrar el ID
        setUserId(userId);
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta de inicio de sesión */}
                <Route index element={<Forms callback={handleLogin} />} />
                
                {/* Ruta para registro */}
                <Route path="/registro" element={<Register />} />

                {/* Ruta para subir video, solo accesible si el usuario está logueado */}
                <Route
                    path="/upload-video"
                    element={userId ? <UploadVideo /> : <Navigate to="/" />}
                />

                {/* Redirigir cualquier ruta no definida a la página de inicio de sesión */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
