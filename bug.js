const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  if (data === null) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

function fetchData() {
  // Simulate a network request that might fail, e.g., database query
  return Math.random() < 0.5 ? { message: 'Success!' } : null; // 50% chance of failure
}

server.listen(3000, () => {
  console.log('Server running on port 3000');
});