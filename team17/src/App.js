import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniTools from './components/Alumni-Tools';
import Directory from './directory';

function App() {
  return (
    <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Directory/>} />
                    <Route path="/tools" element={<AlumniTools />} />
                    <Route path="/resources" element={<h1>Resources Page</h1>} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
