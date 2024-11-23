import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './styles/VideoPlayer.css';

function VideoPlayer() {
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const videoId = localStorage.getItem('videoId'); // Obtener el videoId desde localStorage
        if (!videoId) {
            setLoading(false);
            return;
        }

        // Simulamos la carga del video utilizando el videoId
        setVideo({ title: `Video ID: ${videoId}` });
        setLoading(false);

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
                <h2>{video ? video.title : 'No se encontró el video'}</h2>
                {/* Aquí agregaríamos el reproductor de video */}
            </div>
        </div>
    );
}

export default VideoPlayer;
