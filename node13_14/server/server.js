import http from 'http';
import { WebSocketServer } from 'ws';

const messages = [];
let clientIdCounter = 0;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running');
});

const wss = new WebSocketServer({ server });

function broadcast(data, exclude) {
  const json = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client !== exclude && client.readyState === client.OPEN) {
      client.send(json);
    }
  });
}

wss.on('connection', (ws) => {
  ws.id = clientIdCounter++;
  console.log('Client connected:', ws.id);

  ws.send(
    JSON.stringify({
      type: 'init',
      messages,
      online: wss.clients.size,
    })
  );

  broadcast({ type: 'online', count: wss.clients.size });

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'new') {
  
        const msg = {
          id: Date.now() + Math.random(), 
          text: data.text,
          date: new Date().toISOString(),
        };
        messages.push(msg);

        broadcast({ type: 'add', message: msg });
      }

      if (data.type === 'edit') {

        const msg = messages.find((m) => m.id === data.id);
        if (msg) {
          msg.text = data.text;

          broadcast({ type: 'edit', id: msg.id, text: msg.text });
        }
      }
    } catch (e) {
      console.error('Invalid message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected:', ws.id);

    broadcast({ type: 'online', count: wss.clients.size });
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
