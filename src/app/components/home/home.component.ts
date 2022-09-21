import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message:any='you are not loggedin'

  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.http.get('http://localhost:9000/userview',{withCredentials:true}).subscribe({
      next: (res:any) => {
        console.log("hey")
        this.message=`hi ${res.username}`;
        console.log(res)
      },
      error: (e) => console.error(e)
    });

  }
  
  
}
