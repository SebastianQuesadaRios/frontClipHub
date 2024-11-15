import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Forms';
import UploadVideo from './components/UploadVideo';
import Home from './components/Home';  // Si tienes un Home donde se muestran los videos

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/upload-video" element={<UploadVideo />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

