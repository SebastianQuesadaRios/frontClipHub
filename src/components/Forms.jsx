import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Forms.css';  // Asegúrate de tener este archivo para los estilos.
import userIcon from '../user.png'; 
import passwordIcon from '../contraseña.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!username || !password) {
            setError('Por favor, ingresa tu nombre de usuario y contraseña.');
            return;
        }

        const loginData = {
            email: username,
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

            if (response.ok) {
                localStorage.setItem('token', result.token);
                setSuccess('Inicio de sesión exitoso');
                navigate('/upload-video');
            } else {
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
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    required
                />
            </div>
            <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
            <button className="register-button" onClick={() => navigate('/registro')}>
                Crear cuenta
            </button>
            <div className="register-info">
                <span className="tm-symbol">®</span>
                AlphaCode
            </div>
        </div>
    );
}

export default Login;
