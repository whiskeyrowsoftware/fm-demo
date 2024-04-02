import express from 'express';
import openAiRoutes from './open-ai/open-ai-routes.js'
import corsOptions from './cors-options.js';
import cors from 'cors'
import path from 'path';

// Specify a port to listen on
const PORT = 3000;
// Create an Express Http Server application
const app = express();

// Apply the relevant WRS CorsOptions
app.use(cors(corsOptions))

// Apply the routes for all modules 
app.use('/api/v1/openai', openAiRoutes)


// Define the first API endpoint
app.get('/api', (req, res) => {
  const filePath = path.join(__dirname, 'wrs-node-api.html');
  res.sendFile(filePath, function(err){
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error sending file.");
    } else {
      console.log("File sent successfully.");
    }
  })
})

// Define the second API endpoint
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye from Express!' });
})

// Start the server
app.listen(PORT, () => {
  console.log(`WRS Node Server [process.id=${process.pid}] is running on http://localhost:${PORT}`);
});