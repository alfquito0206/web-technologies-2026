import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..', 'inicial');

const contentTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.mjs': 'text/javascript; charset=UTF-8'
};

const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('404 Not Found');
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const safePath = normalize(requestedPath).replace(/^([.][.][/\\])+/, '');
  const filePath = join(ROOT, safePath);

  try {
    const data = await readFile(filePath);
    const type = contentTypes[extname(filePath)] ?? 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor disponible en http://localhost:${PORT}/`);
});
