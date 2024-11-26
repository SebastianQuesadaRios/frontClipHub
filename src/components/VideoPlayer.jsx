import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './styles/VideoPlayer.css';

function VideoPlayer() {
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            const videoId = localStorage.getItem('videoId');
            if (!videoId) {
                setError('No se encontró el ID del video');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://back-clip-hub.vercel.app/v1/ClipHub/video/${videoId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el video');
                }

                const data = await response.json();
                setVideo(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideo();

        // Limpiar el localStorage cuando se salga del componente
        return () => {
            localStorage.removeItem('videoId');
        };
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Navbar />
            <div className="video-player-container">
                <h2>{video.title}</h2>
                <video controls width="100%">
                    <source src={video.videoUrl} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
                <p>{video.description}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;

