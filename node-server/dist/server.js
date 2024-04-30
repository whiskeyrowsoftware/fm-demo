import express from 'express';
import openAiRoutes from './open-ai/open-ai-routes.js';
import corsOptions from './cors-options.js';
import cors from 'cors';
import path from 'path';
// Housekeeping constants
const apiFileName = path.normalize(`${process.cwd()}/src/wrs-node-api.html`);
// Specify a port to listen on
const PORT = 3000;
// Create an Express Http Server application
const app = express();
// Apply the relevant WRS CorsOptions and JSON options
app.use(cors(corsOptions));
app.use(express.json());
// Apply the routes for all modules 
app.use('/api/v1/openai', openAiRoutes);
// Return the default API Greeting
app.get('/api', (req, res) => {
    res.sendFile(apiFileName, function (err) {
        if (err) {
            res.status(500).send(`Error sending greeting file:${err}`);
        }
    });
});
// Redirect to api URL
app.get('/', (req, res) => {
    res.redirect('../api');
});
// Start the server
app.listen(PORT, () => {
    console.log(`WRS Node Server [process.id=${process.pid}] is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map