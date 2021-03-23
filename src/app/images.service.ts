import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  uri = 'express server link';

  getImages() {
    this.http.get("${this.uri}/");
  }
  
}
