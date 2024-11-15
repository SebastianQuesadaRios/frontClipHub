import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Register.css';
import userIcon from '../user.png'; 
import passwordIcon from '../contraseña.png';
import mailIcon from '../mail.png';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        setError('');
        setSuccess('');

        // Verifica si las contraseñas coinciden
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        // Prepara los datos con los nombres de campos correctos para el backend
        const registerData = {
            nombre: username,    // Cambié 'username' a 'nombre'
            correo: email,       // Cambié 'email' a 'correo'
            contraseña: password,  // Cambié 'password' a 'contraseña'
        };

        try {
            // Realiza la solicitud al backend
            const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            const result = await response.json();

            // Maneja la respuesta del servidor
            if (response.ok) {
                setSuccess(result.message || 'Usuario registrado correctamente');
                setTimeout(() => {
                    navigate('/login'); // Redirige al login después de mostrar el mensaje de éxito
                }, 2000); // Espera 2 segundos antes de redirigir
            } else {
                setError(result.message || 'Error al registrarse');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setError('Error al intentar registrarse. Intente de nuevo más tarde.');
        }
    };

    const handleBack = () => {
        navigate('/'); // Redirige al usuario a la página de inicio de sesión
    };

    return (
        <div className="register-container">
            <div className="page-title">ClipHub</div>
            <h2 className="register-title">Crea tu cuenta</h2>
            <p className="register-subtitle">Regístrate para empezar a subir videos</p>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div className="form-group">
                <label htmlFor="username">
                    <img src={userIcon} alt="User Icon" className="icon" /> Nombre de usuario
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
                <label htmlFor="email">
                    <img src={mailIcon} alt="mail Icon" className="icon" /> Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
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
            <div className="form-group">
                <label htmlFor="confirmPassword">
                    <img src={passwordIcon} alt="Password Icon" className="icon" /> Confirmar contraseña
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirma tu contraseña"
                    required
                />
            </div>
            <button className="register-button" onClick={handleRegister}>Registrarse</button>
            <button className="back-button" onClick={handleBack}>Volver</button> {/* Botón de "Volver" */}
        </div>
    );
}

export default Register;



