import React from 'react';
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Dashboard.css';

function Dashboard() {
    // Simulación de datos de videos desde el servidor
    const videos = [
        {
            id: 1,
            title: 'Tutorial de React',
            thumbnailUrl: 'https://via.placeholder.com/320x180?text=React+Tutorial',
            channel: 'React Dev',
        },
        {
            id: 2,
            title: 'Cómo dominar CSS',
            thumbnailUrl: 'https://via.placeholder.com/320x180?text=CSS+Mastery',
            channel: 'Web Designer',
        },
        {
            id: 3,
            title: 'Introducción a JavaScript',
            thumbnailUrl: 'https://via.placeholder.com/320x180?text=JavaScript+Basics',
            channel: 'JS Guru',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Explora los videos</h1>
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


