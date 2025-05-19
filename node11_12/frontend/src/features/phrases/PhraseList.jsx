import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhrases, deletePhrase, markLearned } from './phrasesSlice';

export default function PhraseList() {
  const dispatch = useDispatch();
  const phrases = useSelector(state => state.phrases.items);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchPhrases());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchPhrases(search));
  };

  return (
    <div>
      <h2>Список фраз</h2>
      <input
        placeholder="Пошук..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Пошук</button>
      <ul>
        {phrases.map(p => (
          <li key={p.id}>
            <strong>{p.english}</strong> — {p.translation}
            {p.learned && ' ✅'}
            <button onClick={() => dispatch(deletePhrase(p.id))}>Видалити</button>
            {!p.learned && <button onClick={() => dispatch(markLearned(p.id))}>Вивчено</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
