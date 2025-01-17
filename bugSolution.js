const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  fetchData().then(data => {
    if (data === null) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    }
  }).catch(error => {
    console.error('Error fetching data:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

function fetchData() {
  // Simulate a network request that might fail, e.g., database query
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 100); // Simulate some delay
  });
}

server.listen(3000, () => {
  console.log('Server running on port 3000');
});