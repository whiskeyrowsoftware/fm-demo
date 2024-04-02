import { Router } from 'express';
import * as openai from './open-ai-module.js'
const router = Router();

router.get('/users',openai.echoGreeting2) 


router.post('/users', (req, res) => {
    // Handle POST request to create a new user
    res.send('User created');
});

router.get('/users/:id', (req, res) => {
    // Handle GET request for a specific user by ID
    res.send(`User ${req.params.id}`);
});

export default router;