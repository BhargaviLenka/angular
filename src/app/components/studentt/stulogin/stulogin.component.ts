import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { BookserviceService } from 'src/app/services/bookservice.service';
import {StudentService} from 'src/app/services/student.service';

@Component({
  selector: 'app-stulogin',
  templateUrl: './stulogin.component.html',
  styleUrls: ['./stulogin.component.scss']
})
export class StuloginComponent implements OnInit {
  alert:any=false;
  tutorial: Login= {
    username:'',
    password: ''
  };
  l:any=[]
  submitted = false;
  constructor(private employeeService: StudentService,private router:Router) { }

  ngOnInit(): void {
    this.GetstuDetails();
  }
  saveTutorial(): void {
    console.log("hello")
    console.log(this.tutorial.username)
    const data = {
      username: this.tutorial.username,
      password:this.tutorial.password
    };
    console.log(data)
    this.employeeService.createl(data)
      .subscribe({
        next: (res) => {
          console.log(res['username']);
          localStorage.setItem('name',JSON.stringify(res['username']))
          this.router.navigate(['/stuloginn']);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      username: '',
      password: '',
    };
  }
  GetstuDetails() 
  {  
    console.log(this.l)
    this.employeeService.getusername().subscribe((data: any) => {  
      this.l = data; 
      console.log(typeof(this.l))
      console.log(this.l)
    }); 
  }
  valid():boolean{
    let s=this.tutorial.username
    for(let i = 0; i <this. l.length; i++)
    { 
      console.log(typeof(s),typeof(this.l[i]['user_id__username']))
      console.log(s)
      console.log(this.l[i]['user_id__username'])
      if(s==this.l[i]['user_id__username'])
      {
        console.log("true")
        this.alert=true;
        console.log(this.tutorial.username)
      }
    }
    if(this.alert){
      console.log("not working")
      this.alert=false
      return false
    }
    else{
      console.log("working")
      return true
    }
    
  }

  
}
