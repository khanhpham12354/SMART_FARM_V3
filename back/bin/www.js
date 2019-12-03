
/** Module dependencies.*/
const app = require('../app');
const http = require('http');
const mqtt = require('mqtt');
const config = require('../config/network');
const logColor = require('../src/untils/logColor');
const service = require('./services/farm');

/** Get port from environment and store in Express.*/
let port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

let UID_DB = require('../config/seeds').gateway;

/** Create HTTP server.*/
let server = http.createServer(app);
const io = require('socket.io')(server);

// let client = mqtt.connect('mqtt://212.237.29.129');
let client = mqtt.connect('mqtt://212.237.29.129', {
      username: 'nhungdaika',
      password: '12354',
      port: 1883
    }
);

client.on('connect', function () {
  console.log("connected!!!");
  client.subscribe('send_data', function (err) {
    if (err) throw err;
  })
});

client.on('message', async function (topic, message) {
  let data = service.convertData(JSON.parse(message));
  io.sockets.emit('farm_'+data.sub_id, data);
  // console.log(data);
});

io.on('connection', function (socket) {
    socket.on("controller", async function (data) {
      console.log(JSON.stringify(data));
      client.publish("control", JSON.stringify(data))
    });
});

/** Listen on provided port, on all network interfaces.*/
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/** Normalize a port into a number, string, or false.*/
function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  return false;
}

/** Event listener for HTTP server "error" event.*/
function onError(error) {
  if (error.syscall !== 'listen') throw error;
  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/** Event listener for HTTP server "listening" event.*/
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + logColor(`color:yellow${bind}`));
}

console.log(logColor(`color:pink
███████╗ █████╗ ██████╗ ███╗   ███╗
██╔════╝██╔══██╗██╔══██╗████╗ ████║
█████╗  ███████║██████╔╝██╔████╔██║
██╔══╝  ██╔══██║██╔══██╗██║╚██╔╝██║
██║     ██║  ██║██║  ██║██║ ╚═╝ ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
`));
