import { Component, OnInit } from '@angular/core';
import { Bookissue } from '../models/bookissue.model';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  tutorial: Bookissue = {
    username:'',
    bookname:'',

  };
  submitted = false;
  constructor(private employeeService: BookserviceService) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    console.log("hello")
    console.log(this.tutorial.username)
    console.log(this.tutorial.bookname)
    const data = {
      username: this.tutorial.username,
      bookname: this.tutorial.bookname,
    };
    console.log(data)
    this.employeeService.create(data)
      .subscribe({
        next: (res) => {
          console.log("hey")
          console.log(res['name']);
          localStorage.setItem('bookissue',JSON.stringify(res['name']))
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      username: '',
      bookname:'',
    };
  }


}
