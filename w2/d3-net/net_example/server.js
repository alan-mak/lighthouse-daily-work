const net = require('net');

const server = net.createServer();
server.on('connection', (client) => {
  console.log('New Client Connected!')
  client.write('Hello There!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Message from client: ', data)
  });
})


server.listen(1999, () => {
  console.log('Server listening on port 1999!');
});