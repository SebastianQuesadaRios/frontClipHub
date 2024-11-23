import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/VideoCard.css';

function VideoCard({ video }) {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.setItem('videoId', video._id);  // Guardamos el videoId en localStorage
        navigate('/video');  // Redirigimos al componente VideoPlayer
    };

    return (
        <div className="video-card" onClick={handleClick}>
            <img
                src={video.previewUrl || 'https://via.placeholder.com/320x180'}
                alt={video.title}
                className="video-thumbnail"
            />
            <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-channel">{video.username || 'Canal desconocido'}</p>
                <p className="video-description">
                    {video.description || 'Descripción no disponible'}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;


