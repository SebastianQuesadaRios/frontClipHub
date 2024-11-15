import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Home.css';

function Home() {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de llamada a la API para obtener los videos
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/videos');
                const data = await response.json();
                if (response.ok) {
                    setVideos(data.videos);  // Asumiendo que el servidor devuelve una lista de videos
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <Navbar />  {/* Barra de navegación */}
            <div className="home-container">
                <h2 className="home-title">Videos Recientes</h2>
                <div className="video-list">
                    {videos.length > 0 ? (
                        videos.map((video) => (
                            <VideoCard key={video._id} video={video} />
                        ))
                    ) : (
                        <p>No hay videos disponibles en este momento.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
