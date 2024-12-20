import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/UploadVideo.css';
import Navbar from './Navbar'; // Importamos el componente Navbar

function UploadVideo() {
    const [videoFile, setVideoFile] = useState(null);
    const [previewFile, setPreviewFile] = useState(null); // Estado para la imagen de vista previa
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    // Función para manejar la carga del archivo de video
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('video')) {
            setVideoFile(file);
        } else {
            setError('Por favor, selecciona un archivo de video válido.');
        }
    };

    // Función para manejar la carga de la imagen de vista previa
    const handlePreviewChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            setPreviewFile(file);
        } else {
            setError('Por favor, selecciona una imagen válida para la vista previa.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validaciones
        if (!videoFile || !previewFile || !title || !description) {
            setError('Faltan campos obligatorios.');
            return;
        }

        // Recuperar el username del localStorage
        const username = localStorage.getItem('username');
        if (!username) {
            setError('Usuario no autenticado. Inicia sesión para subir un video.');
            return;
        }

        // Crear un FormData para enviar los archivos
        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('preview', previewFile); // Añadir la imagen de vista previa
        formData.append('title', title);
        formData.append('description', description);
        formData.append('username', username); // Agregar el username al formulario

        try {
            const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/upload-video', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Video y vista previa subidos con éxito');

                // Resetear campos
                setVideoFile(null);
                setPreviewFile(null);
                setTitle('');
                setDescription('');

                // Esperar 3 segundos antes de redirigir al home
                setTimeout(() => {
                    navigate('/dashboard'); // Redirigir al home después de 3 segundos
                }, 3000);
            } else {
                setError(result.message || 'Error al subir el video');
            }
        } catch (error) {
            console.error('Error al intentar subir el video:', error);
            setError('Error al intentar subir el video. Intente de nuevo más tarde.');
        }
    };

    return (
        <div>
            <Navbar /> {/* Agregamos la barra de navegación en la parte superior */}
            <div className="upload-container">
                <h2 className="upload-title">Sube tu Video</h2>
                <p className="upload-subtitle">Comparte tu video con la comunidad</p>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="video">
                            <i className="fas fa-video icon"></i> Video
                        </label>
                        <input
                            type="file"
                            id="video"
                            accept="video/*"
                            onChange={handleVideoChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preview">
                            <i className="fas fa-image icon"></i> Imagen de Vista Previa
                        </label>
                        <input
                            type="file"
                            id="preview"
                            accept="image/*"
                            onChange={handlePreviewChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">
                            <i className="fas fa-heading icon"></i> Título
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ingresa el título del video"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">
                            <i className="fas fa-align-left icon"></i> Descripción
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Agrega una descripción para tu video"
                            required
                        />
                    </div>
                    <button className="upload-button" type="submit">Subir Video</button>
                </form>
            </div>
        </div>
    );
}

export default UploadVideo;


