import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imageSrc:any = 'http://127.0.0.1:9000/media/'
  username!:any;
  user!:any;
  emp:any;
  constructor(private bookservice:StudentService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name');
    this.user = JSON.parse(this.username)
    console.log(this.user)
    this.getsId(this.user)
  }

  getsId(id:any) 
  {  
    console.log(id,"fgfd")
    this.bookservice.getId(id).subscribe((data: any) => {  
      this.emp = data; 
      console.log(this.emp[0]['image'])
      this.imageSrc=this.imageSrc+this.emp[0]['image']
      console.log(this.emp)
    }); 
  }

}
