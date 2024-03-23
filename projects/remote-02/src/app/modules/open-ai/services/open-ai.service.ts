import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class OpenAiDataService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'your-auth-token'
      })
    }
  }

  fetchData(): Observable<any> {
    // Example URL - replace with your actual endpoint
    const url = 'https://api.example.com/data';
    return this.http.get(url);
  }
  postRequest(url: string, body: any, httpOptions?: { headers: HttpHeaders }): Observable<any> {
    return this.http.post(url, body, httpOptions);
  }
}
