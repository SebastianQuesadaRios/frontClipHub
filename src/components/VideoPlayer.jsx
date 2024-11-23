import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/VideoPlayer.css';

function VideoPlayer({ videos }) {
    const { videoId } = useParams(); // Obtén el ID del video desde la URL
    const navigate = useNavigate();

    // Busca el video correspondiente por ID
    const video = videos.find((v) => v._id === videoId);

    if (!video) {
        return (
            <div>
                <Navbar />
                <div className="video-player-error">
                    <h2>Video no encontrado</h2>
                    <button onClick={() => navigate(-1)}>Volver</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="video-player">
                <h1>{video.title}</h1>
                <video
                    src={video.videoUrl} // URL del video guardada en tu S3
                    controls
                    className="video-element"
                />
                <p>{video.description}</p>
                <p>Subido por: {video.username || 'Usuario desconocido'}</p>
                <button onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    );
}

export default VideoPlayer;
