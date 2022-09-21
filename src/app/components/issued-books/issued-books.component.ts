import { Component, OnInit } from '@angular/core';
import { BookissueService } from 'src/app/services/bookissue.service';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.scss']
})
export class IssuedBooksComponent implements OnInit {
  emp:any;
  ball:number=1;
  s:any;
  constructor(private bookservice:BookserviceService) { }

  ngOnInit(): void {
    this.GetBookDetails()
  }

  GetBookDetails() 
  {  
    console.log(this.emp)
    this.bookservice.GetBookissueDetails().subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
    }); 
  }
  search(id:any){
    this.bookservice.search(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
      console.log("hello")
    }); 
      console.log(id)

  }
  

  

}
