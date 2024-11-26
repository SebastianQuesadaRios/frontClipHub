import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './styles/Perfil.css';

function Perfil() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserVideos = async () => {
            const correo = localStorage.getItem('username'); // Recuperar el correo del usuario
            if (!correo) {
                setError('No se encontró el correo en el sistema.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(
                    `https://back-clip-hub.vercel.app/v1/ClipHub/videos/usuario/${correo}`
                );
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const userVideos = await response.json();
                setVideos(userVideos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserVideos();
    }, []);

    const handleVideoClick = (videoId) => {
        // Guardar el ID del video en el localStorage y redirigir al VideoPlayer
        localStorage.setItem('videoId', videoId);
        navigate('/video-player');
    };

    if (loading) return <div>Cargando videos...</div>;
    if (error) return <div>Error al cargar videos: {error}</div>;

    return (
        <div>
            <Navbar />
            <div className="perfil-content">
                <h1>Mis Videos</h1>
                {videos.length > 0 ? (
                    <div className="video-grid">
                        {videos.map((video) => (
                            <div
                                key={video._id}
                                className="video-card"
                                onClick={() => handleVideoClick(video._id)} // Manejo de clic
                            >
                                <img src={video.previewUrl} alt={video.title} />
                                <h3>{video.title}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No tienes videos subidos aún.</p>
                )}
            </div>
        </div>
    );
}

export default Perfil;


