import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import Navbar from './Navbar';
import VideoCard from './VideoCard';
import './styles/Dashboard.css';

function Dashboard() {
    const [videos, setVideos] = useState([]); // Estado para almacenar los videos
    const [loading, setLoading] = useState(true); // Estado para indicar carga
    const [error, setError] = useState(null); // Estado para errores
    const navigate = useNavigate(); // Hook para redirección

    useEffect(() => {
        // Función para obtener los videos del backend
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://back-clip-hub.vercel.app/v1/ClipHub/videos'); // Cambia la URL por la de tu backend
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setVideos(data); // Actualiza el estado con los videos
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos(); // Llama la función al montar el componente
    }, []);

    // Función para manejar el clic en una tarjeta
    const handleVideoClick = (videoId) => {
        navigate(`/video/${videoId}`); // Navega a la ruta del video
    };

    if (loading) return <div>Cargando videos...</div>; // Mensaje mientras carga
    if (error) return <div>Error al cargar videos: {error}</div>; // Mensaje si hay error

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <h1>Explora los videos</h1>
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <VideoCard
                            key={video._id}
                            video={video}
                            onClick={() => handleVideoClick(video._id)} // Pasa el manejador de clic
                        />
                    ))
                ) : (
                    <p>No hay videos disponibles.</p> // Mensaje si no hay videos
                )}
            </div>
        </div>
    );
}

export default Dashboard;




