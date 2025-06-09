const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Node.js App</title></head>
      <body style="font-family: sans-serif;">
        <h1>Hello from Node.js!</h1>
        <p>This is served via reverse proxy using Nginx.</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
