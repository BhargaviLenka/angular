import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { Login } from 'src/app/models/login.model';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { StudentService } from 'src/app/services/student.service';
const ApiUrl = 'http://localhost:9000'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  form! :FormGroup
  tutorial: Login= {
    username:'',
    password: ''
  };
  submitted = false;
  constructor(private employeeService: StudentService,private router:Router,private formBuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:"",
      password:""
    })
    
    
  }
  // saveTutorial(): void {
  //   console.log("hello")
  //   console.log(this.tutorial.username)
  //   const data = {
  //     username: this.tutorial.username,
  //     password:this.tutorial.password
  //   };
  //   console.log(data)
  //   this.employeeService.createa(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log("hey")
  //         console.log(res['username']);
  //         localStorage.setItem('g',JSON.stringify(res['name']))
  //         this.router.navigate(['/adminloginn']);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  
  submit1():void{
    this.http.post("http://localhost:9000/adlog",this.form.getRawValue(), {withCredentials:true
  }).subscribe({next:(res)=>{
    console.log(this.form.getRawValue)
    this.router.navigate(['/adminloginn'])
  },
  error:(e)=>console.error(e)
  })
  
  }

  login() {
    this.http.post('http://localhost:9000/adlog', this.form.getRawValue(), {withCredentials: true})
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;
        localStorage.setItem('token',AuthInterceptor.accessToken )
        this.router.navigate(['/adminloginn']);
      });
  }
  submit():void {
    console.log("In login", this.form.getRawValue())
    this.http.post('http://localhost:9000' + '/adlog', this.form.getRawValue(), {
      withCredentials: true
      }).subscribe(() => this.router.navigate(['/adminloginn'])); 
  }
  // newTutorial(): void {
  //   this.submitted = false;
  //   this.tutorial = {
  //     username: '',
  //     password: '',
  //   };
  // }

}
