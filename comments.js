// Create web server
// 1. Require the 'http' module
// 2. Create a server
// 3. Listen to the server
// 4. Create a route for '/comments'
// 5. Return the comments
// 6. Start the server
// 7. Test the server

var http = require('http');

var comments = [
  'Comment 1',
  'Comment 2',
  'Comment 3'
];

var server = http.createServer(function(request, response) {
  if (request.url === '/comments') {
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    response.end(comments.join('\n'));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(3000);

// Test the server
// curl http://localhost:3000/comments