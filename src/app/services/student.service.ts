import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl='http://127.0.0.1:9000'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  GetstuDetails() {
    
    return this.http.get(baseUrl+'/viewstu');  
  }
  createl(data: any): Observable<any> {
    return this.http.post(baseUrl+'/stulog', data);
  }
  creater(data: any): Observable<any> {
    return this.http.post(baseUrl+'/stureg', data);
  }
  getId(id:any)
  {
    return this.http.get(baseUrl + '/viewind/'+id, );
  }
  gethis(id:any)
  {
    return this.http.get(baseUrl+'/history/'+id,)
  }
  delstu(id:any)
  {
    return this.http.get(baseUrl+'/delstu/'+id,)
  }
  search(id:any)
  {
    return this.http.get(baseUrl+'/searchstudent/'+id,)
  }
  getusername(){
    return this.http.get(baseUrl+'/viewusername');  
  }
  createa(data: any): Observable<any> {
    return this.http.post(baseUrl+'/adlog', data, {withCredentials:true});
  }
}
