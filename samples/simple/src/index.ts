import express, { Application, Request, Response } from 'express';
import http from 'http';

const app: Application = express();
const server = http.createServer(app);

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello World!' });
});

const PORT = 5000;

server.listen(PORT);

server.on('listening', () => {
  console.info('server up listening');
});