const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  // response
  if(request.url === '/') {
    response.code = 200;
    response.write("Welcome");
    response.end();
  } else if (request.url === '/urls') {
    response.code = 200;
    response.write("www.lighthouselabs.ca\nwww.google.com");
    response.end();
  } else {
    response.code = 404;
    response.write("404 Page not Found");
    response.end();
  }
};

//Creates server
const server = http.createServer(requestHandler);
console.log('Server created'); // NEW LINE

// Listens to incoming requests
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
