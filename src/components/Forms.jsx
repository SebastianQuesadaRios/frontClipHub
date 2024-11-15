import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Forms.css';

function Forms({ callback }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Por favor, ingresa un correo y contraseña.');
            return;
        }

        // Aquí deberías hacer la solicitud de login al backend
        try {
            // Suponiendo que el login es exitoso
            const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                callback(data.userId); // Llamamos a la función que maneja el login
            } else {
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión:', error);
            setError('Error al intentar iniciar sesión. Intente de nuevo más tarde.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default Forms;


