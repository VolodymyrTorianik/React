const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


let dreams = [
  {
    id: 'd1',
    title: 'Подорож до Японії',
    description: 'Хочу побачити сакуру в повному цвітінні',
    category: 'подорожі',
    creator: 'u1'
  },
  {
    id: 'd2',
    title: 'Вивчити React',
    description: 'Створити свій перший додаток',
    category: 'навчання',
    creator: 'u2'
  }
];


app.get('/api/dreams', (req, res) => {
  res.json({ dreams });
});

app.get('/api/dreams/:id', (req, res) => {
  const dream = dreams.find(d => d.id === req.params.id);
  if (!dream) return res.status(404).json({ message: 'Dream not found' });
  res.json(dream);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});