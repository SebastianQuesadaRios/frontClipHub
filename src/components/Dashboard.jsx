import React from 'react';
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Dashboard.css';

function Dashboard() {
    const videos = [
        {
            id: 1,
            title: 'Tutorial de React',
            thumbnailUrl: 'https://via.placeholder.com/320x180?text=React+Tutorial',
            channel: 'React Dev',
            description: 'Aprende React desde cero con este tutorial práctico.',
        },
        {
            id: 2,
            title: 'Cómo dominar CSS',
            thumbnailUrl: 'https://via.placeholder.com/320x180?text=CSS+Mastery',
            channel: 'Web Designer',
            description: 'Guía completa para dominar CSS y crear diseños increíbles.',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Explora los videos</h1>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;



