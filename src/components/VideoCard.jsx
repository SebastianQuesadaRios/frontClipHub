import React from 'react';
import './styles/VideoCard.css'; // Archivo CSS para estilos de la tarjeta

function VideoCard({ video }) {
    return (
        <div className="video-card">
            <img
                src={video.thumbnailUrl || 'https://via.placeholder.com/320x180'}
                alt={video.title}
                className="video-thumbnail"
            />
            <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-channel">{video.channel || 'Canal desconocido'}</p>
            </div>
        </div>
    );
}

export default VideoCard;
