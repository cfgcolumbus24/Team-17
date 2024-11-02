import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniTools from './components/Alumni-Tools';
import Directory from './components/Directory.js';

function App() {
  
  const data = [
    {
      posts: [
        {
          id: 1,
          title: 'Art Exhibit 11/1',
          description: 'Looking for a friend on a new project!',
          date: 'Nov 01, 2024',
          datetime: '11/01/2024 06:31:08',
          category: { title: 'Collaboration' },
          author: 'Anand Joshi',
        },
        {
            id: 2,
            title: 'Showcase 11/3',
            description: 'Come to my showcase in lower Manhattan on November 3rd!',
            date: 'Oct 31, 2024',
            datetime: '10/31/2024 12:29:08',
            category: { title: 'Spotlight' },
            author: 'John Doe',
          },
          {
            id: 3,
            title: 'Spotlight Artist: Maria Garcia',
            description: 'This month we are celebrating a new and upcoming artist, Maria Garcia!',
            date: 'Sept 14, 2024',
            datetime: '09/14/2024 10:49:08',
            category: { title: 'Spotlight' },
            author: 'Zayn Malik',
          },
          {
            id: 4,
            title: 'Photography Workshop 11/12',
            description: 'Join my photography workshop for beginners and intermediate levels.',
            date: 'Oct 28, 2024',
            datetime: '10/28/2024 08:19:42',
            category: { title: 'Resources' },
            author: 'Sophie Kim',
          },
          {
            id: 5,
            title: 'Photography Workshop 11/12',
            description: 'Join my photography workshop for beginners and intermediate levels.',
            date: 'Oct 28, 2024',
            datetime: '10/28/2024 08:19:42',
            category: { title: 'Alumni Event' },
            author: 'Sophie Kim',
          },
      ]
    }
  ]

  return (
    <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Directory/>} />
                    <Route path="/tools" element={<AlumniTools posts = {data[0].posts} />} />
                    {/* <Route path="/resources" element={<h1>Resources Page</h1>} /> */}
                </Routes>
            </div>
        </Router>
  );
}

export default App;
