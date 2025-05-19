import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PhraseList from './features/phrases/PhraseList';
import AddPhraseForm from './features/phrases/AddPhraseForm';
import './index.css'; 

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <nav>
          <Link to="/">Список</Link> | <Link to="/add">Додати</Link>
        </nav>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
        </button>
      </header>

      <Routes>
        <Route path="/" element={<PhraseList />} />
        <Route path="/add" element={<AddPhraseForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
