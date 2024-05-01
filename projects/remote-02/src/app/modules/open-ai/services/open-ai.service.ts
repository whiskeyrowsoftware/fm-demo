import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import fetch from 'node-fetch';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'
import {OpenAI } from 'openai'
import io, { Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class OpenAiDataService  {
  private socket: Socket;
  
  constructor(private http: HttpClient) {
    this.socket = io('ws://localhost:3000');
  }
  
  getDataStream(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('dataChunk', (data: any) => {
        observer.next(data)
      })

      return () => {
        this.socket.disconnect();
      }
    })
  }

  generateImage(description: string, apiKey: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // Send API key securely
    });

    // The payload you'll send to your backend, which then forwards the request to OpenAI
    const body = {
      prompt: description,
      n: 1,
      size: "1024x1024"
    };
    return this.http.post<any>(`${environment.openAiUrl.ImageGeneration}`, body, { headers: headers });
  }
}