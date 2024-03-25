import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'
import {OpenAI } from 'openai'

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class OpenAiDataService  {
 

  constructor(private http: HttpClient) { }
  
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