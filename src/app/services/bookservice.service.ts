import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthInterceptor } from '../interceptors/auth.interceptor';


const baseUrl='http://127.0.0.1:9000'
const b='http://localhost:9000/a'

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }
  GetBookDetails() {
    
    return this.http.get(baseUrl+'/viewbook');  
  }
  GetBookissueDetails(){
    return this.http.get(baseUrl+'/viewissue');  
  }
  createbook(data: any): Observable<any> {
    return this.http.post(baseUrl+'/addbook', data);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'/bookissue',data);
  }
  change(data:any,id:string):Observable<any>
  {
    return this.http.post(baseUrl+'/changepass/'+id,data)
  }
  edit(data:any,id:string):Observable<any>
  {
    return this.http.post(baseUrl+'/editprofile/'+id,data)
  }
  
  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(baseUrl, formData);
  }
  gethis(id:any)
  {
    return this.http.get(baseUrl+'/changepass/'+id,)
  }
  delbook(id:any)
  {
    return this.http.get(baseUrl+'/delbook/'+id,)
  }
  search(id:any)
  {
    return this.http.get(baseUrl+'/searchissue/'+id,)
  }
  loggedin():boolean
  {
    let s=AuthInterceptor.accessToken.length
    
    console.log(s)
    if(s==0)
    {
      return false;
    }
    else{
      return true;
    }
  }
  analyt(token:string,data:any)
  {
    console.log(data)
    console.log(token)
    return this.http.post(`${b}/${token}`,data);
  }
  
}
