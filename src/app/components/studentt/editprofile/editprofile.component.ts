import { Component, OnInit } from '@angular/core';
import { Editprofile } from 'src/app/models/editprofile.model';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  username!:any;
  user!:any;
  emp:any;
  tutorial: Editprofile = {
    first_name:'',
    last_name: '',
    branch:'',
    phone:'',
    
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
    console.log(this.tutorial.first_name)
    console.log(this.tutorial.last_name)
    const data = {
      first_name: this.tutorial.first_name,
      last_name: this.tutorial.last_name,
      branch: this.tutorial.branch,
      phone: this.tutorial.phone,
     
     
    };
    console.log(data)
    this.employeeService.edit(data,this.user)
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
      first_name:'',
      last_name: '',
      branch:'',
      phone:''
      
    };
  }

}
