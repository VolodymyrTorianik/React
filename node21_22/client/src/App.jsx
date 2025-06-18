import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DreamDetail from './components/DreamDetail';
import './App.css';

function App() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/dreams')
      .then(res => res.json())
      .then(data => setDreams(data.dreams))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <h1>Dreams List</h1>
            <ul>
              {dreams.map(dream => (
                <li key={dream.id}>
                  <Link to={`/dreams/${dream.id}`}>
                    {dream.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        } />
        {/* Добавляем новый маршрут */}
        <Route path="/dreams/:id" element={<DreamDetail />} />
      </Routes>
    </Router>
  );
}

export default App;