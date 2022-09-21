import { Component, OnInit } from '@angular/core';
import { Changepass } from 'src/app/models/changepass.model';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
  username!:any;
  user!:any;
  emp:any;
  tutorial: Changepass = {
    current_password:'',
    new_password: '',

  };
  submitted = false;
  constructor(private employeeService: BookserviceService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name');
    console.log(this.username)
    this.user = JSON.parse(this.username)
    console.log(this.user);
  }
  saveTutorial(): void {
    console.log("hello")
    console.log(this.tutorial.current_password)
    console.log(this.tutorial.new_password)
    const data = {
      current_password: this.tutorial.current_password,
      new_password: this.tutorial.new_password,
    };
    console.log(data)
    this.employeeService.change(data,this.user)
      .subscribe({
        next: (res) => {
          console.log("hey")
          console.log(res['name']);
          localStorage.setItem('pass',JSON.stringify(res['name']))
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      current_password: '',
       new_password: '',
    };
  }
}
