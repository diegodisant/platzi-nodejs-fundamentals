const http = require('http');

const server = http.createServer((req, res) => {
  console.log('[+] new request');
  console.log(req.url);


  res.writeHead(200, {
    'X-Security-Origin-Token': '8f439799adc59f87a5c7d3d54c184bb9f84edc9b',
  });

  switch (req.url) {
    case '/':
      res.write('You are in the root path');

      break;
    case '/home':
      res.write('You are at 127.0.0.1');

      break;
    default:
      res.write('I cannot handle this request');
  }

  res.end();
});

server.listen(4444);
