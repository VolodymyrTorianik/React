const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3001;
const FILE = './data.json';

function readData() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch (error) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const pathname = parsedUrl.pathname;


  if (method === 'GET' && pathname === '/api/phrases') {
    let phrases = readData();
    const search = parsedUrl.query.search?.toLowerCase();
    if (search) {
      phrases = phrases.filter(p =>
        p.english.toLowerCase().includes(search) || p.translation.toLowerCase().includes(search)
      );
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(phrases));
  }


  else if (method === 'POST' && pathname === '/api/phrases') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { english, translation } = JSON.parse(body);
        if (!english || !translation) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing fields' }));
          return;
        }
        const phrases = readData();
        const newPhrase = {
          id: Date.now(),
          english,
          translation,
          learned: false,
        };
        phrases.push(newPhrase);
        writeData(phrases);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newPhrase));
      } catch (e) {
        res.writeHead(400);
        res.end('Invalid JSON');
      }
    });
  }


  else if (method === 'DELETE' && pathname.startsWith('/api/phrases/')) {
    const id = parseInt(pathname.split('/').pop());
    let phrases = readData();
    const newPhrases = phrases.filter(p => p.id !== id);
    writeData(newPhrases);
    res.writeHead(204);
    res.end();
  }

  else if (method === 'PUT' && pathname.startsWith('/api/phrases/')) {
    const id = parseInt(pathname.split('/').pop());
    const phrases = readData();
    const index = phrases.findIndex(p => p.id === id);
    if (index !== -1) {
      phrases[index].learned = true;
      writeData(phrases);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(phrases[index]));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  }


  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running`);
});
