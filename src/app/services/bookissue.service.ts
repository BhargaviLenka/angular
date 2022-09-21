import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl='http://127.0.0.1:9000'
@Injectable({
  providedIn: 'root'
})
export class BookissueService {

  constructor(private http:HttpClient) { }
  GetBookissueDetails() {
    
    return this.http.get(baseUrl);  
  }
  
}
