import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPath = join(__dirname, '..', 'inicial', 'index.html');

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    try {
      const html = await readFile(indexPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(html);
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('No se ha podido leer index.html');
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}/`);
});
