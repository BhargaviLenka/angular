import { Component, OnInit } from '@angular/core';
import { Addbook } from 'src/app/models/addbook.model';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  tutorial: Addbook = {
    name:'',
    author: '',
    isbn:0,
    category:'',

  };
  submitted = false;
  constructor(private employeeService: BookserviceService) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    console.log("hello")
    console.log(this.tutorial.name)
    console.log(this.tutorial.author)
    const data = {
      name: this.tutorial.name,
      author: this.tutorial.author,
      isbn:this.tutorial.isbn,
      category:this.tutorial.category

    };
    console.log(data)
    this.employeeService.createbook(data)
      .subscribe({
        next: (res) => {
          console.log("hey")
          console.log(res['name']);
          localStorage.setItem('book',JSON.stringify(res['name']))
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      author: '',
      isbn:0,
      category:'',
    };
  }

}

