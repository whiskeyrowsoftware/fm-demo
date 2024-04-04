import { Router } from 'express';
import * as apis from './open-ai-apis.js'
const router = Router();

router.get('',(req,res) =>{
    apis.echoGreeting(req,res)
}) 

router.post('/createimage', (req, res) => {
    apis.createImage(req, res)
})

router.get('/users/:id', (req, res) => {
    // Handle GET request for a specific user by ID
    res.send(`User ${req.params.id}`);
})

export default router;