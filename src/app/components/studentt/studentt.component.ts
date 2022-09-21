import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentt',
  templateUrl: './studentt.component.html',
  styleUrls: ['./studentt.component.scss']
})
export class StudenttComponent implements OnInit {
  emp:any;
  s:any;
  constructor(private bookservice:StudentService) { }

  ngOnInit(): void {
    this.GetstuDetails()
  }

  GetstuDetails() 
  {  
    console.log(this.emp)
    this.bookservice.GetstuDetails().subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
    }); 
  }
  f(id:any)
  {
    this.bookservice.delstu(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
      console.log("hello")
    }); 
      console.log(id)
  }
  search(id:any)
  {
    this.bookservice.search(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
      console.log("hello")
    }); 
      console.log(id)
  }

}
