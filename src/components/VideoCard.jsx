import React from 'react';
import './styles/VideoCard.css';  // Asegúrate de tener el archivo CSS adecuado

function VideoCard({ video }) {
    return (
        <div className="video-card">
            <div className="video-thumbnail">
                {/* Aquí va la imagen de la miniatura del video */}
                {/* Si no tienes la miniatura, puedes usar una imagen placeholder */}
                <img 
                    src={video.thumbnailUrl || 'https://via.placeholder.com/320x240'} 
                    alt={video.title} 
                    className="thumbnail-image" 
                />
            </div>
            <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                {/* Aquí puedes agregar más detalles o botones para ver más */}
            </div>
        </div>
    );
}

export default VideoCard;
