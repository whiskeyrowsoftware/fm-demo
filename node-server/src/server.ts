import express from 'express';
import openAiRoutes from './open-ai/open-ai-routes.js'
import corsOptions from './cors-options.js';
import cors from 'cors'
import path from 'path';
import { createServer } from 'http';
import {Server as SocketIOServer} from 'socket.io'

// Housekeeping constants
const  apiFileName = path.normalize(`${process.cwd()}/node-server/src/wrs-node-api.html`);
const  apiFileNotFound = path.normalize(`${process.cwd()}/node-server/src/wrs-node-404.html`);
const PORT = 3000
const app = express();
const server = createServer(app)
const io = new SocketIOServer(server)

// Apply the relevant WRS CorsOptions and JSON options
app.use(cors(corsOptions))
app.use(express.json());

// Apply the routes for all modules 
app.use('/api/v1/openai', openAiRoutes)

// Return the default API Greeting
app.get('/api', (req, res) => {
  res.sendFile(apiFileName, function(err){
    if (err) {
      res.status(500).send(`Error sending greeting file:${err}`);
    } 
  })
})

// Redirect to api URL
app.get('/', (req, res) => {
  res.redirect('/api');
})

// Redirect to api URL
app.get('**', (req, res) => {
  res.sendFile(apiFileNotFound, function(err){
    if (err) {
      res.status(500).send(`Error sending 404 file:${err}`);
    } 
  })
})

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', (reason) => {
    console.log(`User disconnected: ${reason} `);
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`WRS Node Server [process.id=${process.pid}] is running on http://localhost:${PORT}`);
});

export {io};