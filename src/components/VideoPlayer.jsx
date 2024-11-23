import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './styles/VideoPlayer.css';

function VideoPlayer() {
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const videoId = localStorage.getItem('videoId'); // Obtener el videoId desde localStorage
        if (!videoId) {
            setLoading(false);
            return;
        }

        // Simulamos que obtendremos la URL del video desde el backend
        // Aquí deberías realizar una solicitud para obtener la URL completa del video basado en el ID
        const fetchVideoUrl = async () => {
            try {
                const response = await fetch(
                    `https://back-clip-hub.vercel.app/v1/ClipHub/video/${videoId}` // Cambia a la ruta de tu backend
                );
                if (!response.ok) {
                    throw new Error('No se pudo cargar el video');
                }
                const data = await response.json();
                setVideoUrl(data.videoUrl); // Supongamos que la URL está en data.videoUrl
                setLoading(false);
            } catch (err) {
                console.error(err.message);
                setLoading(false);
            }
        };

        fetchVideoUrl();

        // Limpieza al desmontar el componente
        return () => {
            localStorage.removeItem('videoId'); // Eliminar el videoId del localStorage
        };
    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <Navbar />
            <div className="video-player-container">
                {videoUrl ? (
                    <video
                        controls
                        src={videoUrl}
                        className="video-player"
                        preload="auto"
                        style={{ width: '100%', maxHeight: '500px' }}
                    >
                        Tu navegador no soporta reproducción de videos.
                    </video>
                ) : (
                    <p>No se encontró el video.</p>
                )}
            </div>
        </div>
    );
}

export default VideoPlayer;

