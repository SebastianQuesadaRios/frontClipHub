import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import VideoCard from "./VideoCard";
import "./styles/Dashboard.css";

function Dashboard() {
    const [videos, setVideos] = useState([]); // Estado para almacenar los videos
    const [loading, setLoading] = useState(true); // Estado para indicar carga
    const [error, setError] = useState(null); // Estado para errores
    const [searchText, setSearchText] = useState(""); // Estado para el texto de búsqueda

    useEffect(() => {
        // Función para obtener los videos del backend
        const fetchVideos = async () => {
            try {
                const response = await fetch("https://back-clip-hub.vercel.app/v1/ClipHub/videos"); // Cambia la URL por la de tu backend
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

    // Filtrar videos según el texto de búsqueda
    const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) return <div>Cargando videos...</div>; // Mensaje mientras carga
    if (error) return <div>Error al cargar videos: {error}</div>; // Mensaje si hay error

    return (
        <div>
            {/* Pasar el estado de búsqueda y su función al Navbar */}
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <div className="dashboard-content">
                <h1>Explora los videos</h1>
                {filteredVideos.length > 0 ? (
                    filteredVideos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))
                ) : (
                    <p>No hay videos disponibles.</p> // Mensaje si no hay videos
                )}
            </div>
        </div>
    );
}

export default Dashboard;





