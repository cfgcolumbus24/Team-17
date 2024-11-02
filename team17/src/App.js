import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniTools from './components/Alumni-Tools';

function App() {
  return (
    <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Alumni Directory Page</h1>} />
                    <Route path="/tools" element={<AlumniTools />} />
                    <Route path="/resources" element={<h1>Resources Page</h1>} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
