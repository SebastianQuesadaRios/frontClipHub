import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Dashboard.css';

function Dashboard() {
    const [videos, setVideos] = useState([]);

    // Usar useEffect para hacer la solicitud GET al backend
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/https://back-clip-hub.vercel.app/v1/ClipHub/videos'); // Ruta para obtener videos
                const data = await response.json();
                
                if (data.status === "Éxito") {
                    setVideos(data.videos); // Almacenar los videos en el estado
                } else {
                    console.error('No se pudieron cargar los videos');
                }
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Explora los videos</h1>
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))
                ) : (
                    <p>No hay videos disponibles</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;




