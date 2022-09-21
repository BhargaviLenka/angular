import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
 emp:any
  constructor(private bookservice:BookserviceService) { }

  ngOnInit(): void {
    this.GetBookDetails()
  }

  GetBookDetails() 
  {  
 
    this.bookservice.GetBookDetails().subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
    }); 
  }
  f(id:any)
  {
    this.bookservice.delbook(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
      console.log("hello")
    }); 
      console.log(id)
  }

}
