var http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log("Server is running");
});
app.get("/", function(req, res) {
  res.send("Hello World\n");
})
app.get("/parks", function(req, res) {
  res.send("The parks seen\n");
})

// OTHER WAY TO MAKE A SERVER
// var server = http.createServer((function(request, response)
// {
//   response.writeHead(200,
//     {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// }));

// server.listen(3000);