import React from 'react';
import Navbar from './Navbar'; // Asegúrate de tener Navbar en la ruta correcta
import VideoCard from './VideoCard'; // Asegúrate de importar VideoCard correctamente
import './styles/Dashboard.css'; // Archivo CSS para estilos específicos de Dashboard

function Dashboard() {
    // Datos de ejemplo de videos
    const videos = [
        {
            id: 1,
            title: 'Cómo programar en React',
            description: 'Aprende los fundamentos de React en este tutorial.',
            thumbnailUrl: 'https://via.placeholder.com/320x240?text=React+Tutorial',
        },
        {
            id: 2,
            title: 'Introducción a JavaScript',
            description: 'Todo lo que necesitas saber sobre JavaScript.',
            thumbnailUrl: 'https://via.placeholder.com/320x240?text=JavaScript+Intro',
        },
        {
            id: 3,
            title: 'Domina CSS en 30 minutos',
            description: 'Aprende a diseñar páginas web con CSS.',
            thumbnailUrl: 'https://via.placeholder.com/320x240?text=CSS+Tutorial',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Bienvenido a tu Dashboard</h1>
                <p>Explora los videos subidos por la comunidad:</p>

                <div className="video-grid">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

