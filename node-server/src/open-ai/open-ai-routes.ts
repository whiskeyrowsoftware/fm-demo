import { Router } from 'express';
import * as apis from './open-ai-apis.js'
import { catchError, of, tap } from 'rxjs'

const router = Router();

router.get('/test', async (req, res) => {
 
  const responseObservable = of(await apis.test(req, res)).pipe(
      catchError(error => {
        res.status(400).send(error.message);
        return of(null); 
      })
    );
    //
    responseObservable.subscribe({
      next: (response) => {
        if (response) {
          console.log(response)
          res.status(200).json({
            user: 'mbowman',
            responseCode: 200,
            message: 'WRS.OpenAI Response Received Successfully',
            receivedResponse: response
          });
        }
      },
      error: (err) => console.error(err),
    });
});

router.post('/create-image', async (req, res) => {
 
  const responseObservable = of(await apis.createImage(req, res)).pipe(
      catchError(error => {
        res.status(400).send(error.message);
        return of(null); 
      })
    );
  
    responseObservable.subscribe({
      next: (response) => {
        if (response) {
          // Asynchronous response to the client
          console.log(response)
          res.status(200).json({
            user: 'mbowman',
            responseCode: 200,
            message: 'WRS.OpenAI Response Received Successfully',
            receivedResponse: response
          });
        }
      },
      error: (err) => console.error(err),
    });
});

router.get('/users/:id', (req, res) => {
    // Handle GET request for a specific user by ID
    res.send(`User ${req.params.id}`);
})

router.get('',(req,res) =>{
  apis.echoGreeting(req,res)
}) 

export default router;