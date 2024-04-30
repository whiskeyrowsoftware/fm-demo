import { response } from 'express';
import fetch from 'node-fetch'
import OpenAI from "openai";
import { ParsedQs } from 'qs';
import {io} from '../server.js'

const ImageGeneration: string = 'https://api.openai.com/v1/images/generations'

export async function test(req:any, res:any) {

  console.log (process.env.OPEN_AI_KEY_WRS_DEV)
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY_WRS_DEV,
    organization: 'org-7CNCzR0O5m9SHAgPiFtMH0Yg',
    project: 'proj_RWKtEaqRwGZkf6kKazuDUouX',
  });
  
  const stream = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: "Say this is a test" }],
      stream: true,
  });
  
  for await (const chunk of stream) {
    const msg = chunk.choices[0]?.delta?.content || ""
    io.emit('New OpenAI Data:', msg)
    console.log(`msg: ${msg}`) 
  };
}
export function echoGreeting(req: any, res:any) {
    const theDate: Date = new Date()
    return res.send(`Greeting from WRS APIs for wrapping OpenAI operations.  Time: ${theDate.getTime()}`)
}
export async function createImage(req: any, res:any) {
    if (!req.body.prompt) {
        res.status(400).send('Missing the open-ai prompt!');
        res.end()
        return
      }
    
    const body = req.body;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPEN_AI_KEY_WRS_DEV}` // Send API key securely
      };
    const response = await fetch(ImageGeneration, {
        method: 'post',
        body: JSON.stringify(body),
        headers: headers,
        }
    );

    const data = await response.json();
    return data
}

