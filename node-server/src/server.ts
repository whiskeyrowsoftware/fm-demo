import express from 'express';

// Create an Express application
const app = express();

// Specify a port to listen on
const PORT = 3000;

// Define the first API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Define the second API endpoint
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye from Express!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});