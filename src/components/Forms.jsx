import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Forms.css';  // Asegúrate de tener este archivo para los estilos.
import userIcon from '../user.png'; 
import passwordIcon from '../contraseña.png';

function Login() {
    const [username, setUsername] = useState(''); // Almacena el nombre de usuario
    const [password, setPassword] = useState(''); // Almacena la contraseña
    const [error, setError] = useState(''); // Mensaje de error
    const [success, setSuccess] = useState(''); // Mensaje de éxito
    const navigate = useNavigate(); // Hook para navegar entre rutas

    // Función que maneja el inicio de sesión
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        setError(''); // Limpiar el mensaje de error
        setSuccess(''); // Limpiar el mensaje de éxito

        // Verificación básica de los campos
        if (!username || !password) {
            setError('Por favor, ingresa tu nombre de usuario y contraseña.');
            return;
        }

        // Preparar los datos para la solicitud de login
        const loginData = {
            email: username, // Usar el nombre de usuario como email
            password,
        };

        try {
            const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();

            // Si el login es exitoso, redirigir al componente de subir video
            if (response.ok) {
                setSuccess('Inicio de sesión exitoso');
                // Redirigir al componente de subir video
                navigate('/UploadVideo');
            } else {
                // Si las credenciales son incorrectas, mostrar error
                setError(result.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setError('Error al intentar iniciar sesión. Intente de nuevo más tarde.');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Inicia Sesión</h2>
            <p className="login-subtitle">Accede a tu cuenta</p>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div className="form-group">
                <label htmlFor="username">
                    <img src={userIcon} alt="User Icon" className="icon" /> Email
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Actualizar el nombre de usuario
                    placeholder="Ingresa tu nombre de usuario"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    <img src={passwordIcon} alt="Password Icon" className="icon" /> Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Actualizar la contraseña
                    placeholder="Ingresa tu contraseña"
                    required
                />
            </div>
            <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
}

export default Login;

