import http from 'http';
import url from 'url';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from './books.js';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  const { method } = req;
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const id = path.split('/')[2];


  console.log(`[${new Date().toISOString()}] ${method} ${path}`);

  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (method === 'GET' && path === '/books') {
      const books = await getAllBooks();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(books));
    } else if (method === 'GET' && /^\/books\/\d+$/.test(path)) {
      const book = await getBookById(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(book));
    } else if (method === 'POST' && path === '/books') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', async () => {
        const data = JSON.parse(body);
        const newBook = await createBook(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newBook));
      });
    } else if (method === 'PUT' && /^\/books\/\d+$/.test(path)) {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', async () => {
        const data = JSON.parse(body);
        const updated = await updateBook(id, data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updated));
      });
    } else if (method === 'DELETE' && /^\/books\/\d+$/.test(path)) {
      await deleteBook(id);
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
