import React from 'react';
import './styles/VideoCard.css';

function VideoCard({ video }) {
    return (
        <div className="video-card">
            <img
                src={video.thumbnailUrl || 'https://via.placeholder.com/320x180'}
                alt={video.title}
                className="video-thumbnail"
            />
            <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-channel">{video.channel || 'Canal desconocido'}</p>
                <p className="video-description">
                    {video.description || 'Descripción no disponible'}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;

