const http = require('http');
const axios = require('axios');

let products = [];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/products') {
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  } else if (req.method === 'POST' && req.url === '/sort-products') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const { sortBy } = JSON.parse(body);

      if (!sortBy) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: 'Not entered category of sorting' }));
      }

      if (sortBy === 'name') {
        products.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === 'price') {
        products.sort((a, b) => a.price - b.price);
      } else {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: 'Unknown sorting criterion' }));
      }

      res.statusCode = 200;
      res.end(JSON.stringify(products));
    });
  } else if (req.method === 'POST' && req.url === '/purchase') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const { productId, quantity } = JSON.parse(body);

      const product = products.find(p => p.id === productId);
      if (!product) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'Does not find product' }));
      }

      if (quantity > product.stock) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: 'There is not enough product in stock.' }));
      }

      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Purchase successful!' }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Page not found' }));
  }
});

axios.get('https://fakestoreapi.com/products')
  .then(response => {
    products = response.data;

    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Помилка при отриманні продуктів:', error);
  });
