import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  constructor(private http: HttpClient) { }

  uri = 'express server link';

  getData() {
    this.http.get("${this.uri}/");
  }
  
}
