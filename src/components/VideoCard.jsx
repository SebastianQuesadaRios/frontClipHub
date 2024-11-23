import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import './styles/VideoCard.css';

function VideoCard({ video }) {
    const navigate = useNavigate(); // Hook para manejar la navegación

    // Función que maneja el clic en la tarjeta
    const handleClick = () => {
        navigate(`/video/${video._id}`); // Redirige a la página del reproductor con el videoId
    };

    return (
        <div className="video-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
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




