import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  username!:any;
  user!:any;
  emp:any;
  constructor(private bookservice:StudentService) { }

  ngOnInit(): void {

    this.username = localStorage.getItem('name');
    console.log(this.username)
    this.user = JSON.parse(this.username)
    console.log(this.user)
    this.GetBookDetails(this.user)
  }
  GetBookDetails(id:any) 
  {  
    this.bookservice.gethis(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp)
      console.log("hello")
    }); 
  }
  s!:any;
  n!:any;
 fine=(d: any): any =>{
    const date1:any = new Date()
    console.log(d)
  const date2:any= new Date(d);
  const diffInMs = Math.abs(date2 - date1);
  this.s=Math.round(diffInMs / (1000 * 60 * 60 * 24));
  console.log(this.s)
  if(this.s>5)
  { 
     this.n=this.s=this.s*3
      return '₹'+this.n
  }
  else{
    return '₹'+0
  }
 }

}

