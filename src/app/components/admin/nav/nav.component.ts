import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  message='hii '
  authen=false;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    console.log("I am in")
    this.http.get('http://localhost:9000/userview',{ withCredentials: true}).subscribe({
      next: (res:any) => {
        console.log("hey")
        this.message=`hi ${res.username}`;
        Emitters.authEmitter.emit(true)
        console.log(this.message)
      },
      error: (e) =>{
        this.message="you are not logged in";
        Emitters.authEmitter.emit(false);
      }
    });

  }
   log():void{
    this.http.post('http://localhost:9000' + '/logview',{}, {
      withCredentials: true
      }).subscribe(() => this.router.navigate(['/'])); 


   }

}
