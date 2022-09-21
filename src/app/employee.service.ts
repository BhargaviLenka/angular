import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
const baseUrl='http://127.0.0.1:8000/add'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  url:any;  
  ur:any;
  constructor(private http:HttpClient ) {   
  
  }  
  GetemployeeDetails() {
    
    this.ur='https://jsonplaceholder.typicode.com/users'
    console.log(this.url)
    return this.http.get(this.url);  
  }
  putemployeeDetails() {
    return this.http.get(this.url);  
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getOneMovie(id:any): Observable<any> {
    return this.http.get(this.url  );
  }

}
