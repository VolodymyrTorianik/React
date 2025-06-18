import { useParams, Link } from 'react-router-dom'; // Добавляем Link в импорт
import { useState, useEffect } from 'react';
import './DreamDetail.css';

const DreamDetail = () => {
  const { id } = useParams();
  const [dream, setDream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDream = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/dreams/${id}`);
        if (!response.ok) throw new Error('Dream not found');
        const data = await response.json();
        setDream(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDream();
  }, [id]);

  if (loading) return <div className="loading">Завантаження...</div>;
  if (error) return <div className="error">Помилка: {error}</div>;

  return (
    <article className="dream-detail">
      <h1>{dream.title}</h1>
      <p className="category">{dream.category}</p>
      <p className="description">{dream.description}</p>
      <Link to="/" className="back-link">← Назад до списку</Link>
    </article>
  );
};

export default DreamDetail;