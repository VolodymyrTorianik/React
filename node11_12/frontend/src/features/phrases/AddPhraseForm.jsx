import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhrase } from './phrasesSlice';
import { useNavigate } from 'react-router-dom';

export default function AddPhraseForm() {
  const [english, setEnglish] = useState('');
  const [translation, setTranslation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(addPhrase({ english, translation }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати фразу</h2>
      <input value={english} onChange={e => setEnglish(e.target.value)} placeholder="English" />
      <input value={translation} onChange={e => setTranslation(e.target.value)} placeholder="Переклад" />
      <button type="submit">Додати</button>
    </form>
  );
}
