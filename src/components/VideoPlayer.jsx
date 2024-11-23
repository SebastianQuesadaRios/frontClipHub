import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/VideoPlayer.css';

function VideoPlayer({ videos }) {
    const { videoId } = useParams(); // Obtiene el ID del video desde la URL
    const video = videos.find((v) => v.videoUrl === videoId); // Encuentra el video correspondiente

    if (!video) {
        return <div>Video no encontrado</div>;
    }

    return (
        <div className="video-player">
            <h1>{video.title}</h1>
            <video src={video.videoUrl} controls autoPlay />
            <p>{video.description}</p>
            <p>Subido por: {video.username}</p>
        </div>
    );
}

export default VideoPlayer;
