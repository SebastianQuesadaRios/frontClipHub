import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './styles/VideoPlayer.css';

function VideoPlayer() {
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const videoId = localStorage.getItem('videoId');  // Obtener el videoId desde localStorage
        if (!videoId) {
            // Si no hay videoId, redirigir a alguna página
            setLoading(false);
            return;
        }

        // Simulamos que obtendríamos el video por ID desde el backend
        // Aquí solo estamos mostrando el ID que almacenamos en el localStorage
        setVideo({ title: `Video ID: ${videoId}` });
        setLoading(false);
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
