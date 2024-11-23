import React from 'react';
import { Link } from 'react-router-dom';
import './styles/VideoCard.css';

function VideoCard({ video }) {
    return (
        <Link to={`/video/${video._id}`} className="video-card-link">
            <div className="video-card">
                <img
                    src={video.previewUrl || 'https://via.placeholder.com/320x180'}
                    alt={video.title}
                    className="video-thumbnail"
                />
                <div className="video-details">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-channel">{video.username || 'Usuario desconocido'}</p>
                    <p className="video-description">
                        {video.description || 'Descripción no disponible'}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default VideoCard;


