
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  register: Register= {
    username: '',
    password: '',
    email: '',
    phone: 0,
    roll_no: 0,
    first_name: '',
    last_name: '',
    classroom: '',
    branch: '',
    confirm_password: ''
  };
  branch:any=['cse','ece','it','eie','eee']
  classroom:any=['A','B','c']
  submitted = false;
  constructor(private employeeService: StudentService,private router:Router) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    console.log("hello")
    console.log(this.register.username)
    const data = {
      username: this.register.username,
      password:this.register.password,
      email:this.register.email,
      branch:this.register.branch,
      phone:this.register.phone,
      roll_no:this.register.roll_no,
      classroom:this.register.classroom,
      first_name:this.register.first_name,
      last_name:this.register.last_name,
      confirm_password:this.register.confirm_password

    };
    console.log(data)
    this.employeeService.creater(data)
      .subscribe({
        next: (res) => {
          console.log("hey")
          console.log(res['username']);
          console.log(res['confirm_password'])
          this.router.navigate(['/addbook']);
          this.submitted = true;
          
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.register = {
      username: '',
      password: '',
      email: '',
     phone: 0,
     roll_no: 0,
     first_name: '',
     last_name: '',
     classroom: '',
     branch: '',
     confirm_password:'',
    };
  }
  onSubmit(){

  }
 
}


