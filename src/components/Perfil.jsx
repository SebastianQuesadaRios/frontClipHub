import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Perfil.css';

function Perfil() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserVideos = async () => {
            const correo = localStorage.getItem('username'); // Usa el correo del localStorage
            if (!correo) {
                setError("No se encontró el correo en el sistema.");
                setLoading(false);
                return;
            }
    
            try {
                const response = await fetch(`https://back-clip-hub.vercel.app/v1/ClipHub/videos/usuario/${correo}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
    
                const userVideos = await response.json();
                setVideos(userVideos);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
    
        fetchUserVideos();
    }, []);
    

    if (loading) return <div>Cargando tus videos...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Navbar />
            <div className="perfil-content">
                <h1>Tus videos</h1>
                {videos.length > 0 ? (
                    <div className="video-grid">
                        {videos.map((video) => (
                            <VideoCard key={video._id} video={video} />
                        ))}
                    </div>
                ) : (
                    <p>No has subido videos aún.</p>
                )}
            </div>
        </div>
    );
}

export default Perfil;


