import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  count:any=0;
  class=['A','B','C']
  selected = 'option2';
  hide =true;
  l:any=[];
  s='Aditya'
  alert:any=false;
  username = new FormControl('', [Validators.minLength(5),Validators.maxLength(8)]);
  email = new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  password = new FormControl('');
  confirm_password=new FormControl('');
  branch=new FormControl('',[Validators.required]);
  classroom=new FormControl('',[Validators.required]);
  first_name=new FormControl('',[Validators.required]);
  last_name=new FormControl('');
  roll_no=new FormControl('123');
  phone=new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  registerform = new FormGroup({
    username : this.username,
    email : this.email,
    password : this.password,
    branch : this.branch,
    first_name:this.first_name,
    last_name:this.last_name,
    classroom:this.classroom,
    confirm_password:this.confirm_password,
    phone:this.phone,
    roll_no:this.roll_no
  })
  constructor(private employeeService: StudentService,private router:Router) { }

  ngOnInit(): void {
    this.GetstuDetails()
  }
  newreg():void{

    console.log(this.registerform)
    const s=JSON.stringify(this.registerform.value)
    const x=this.registerform.value
   console.log(s)
   console.log(x)
   this.employeeService.creater(x)
      .subscribe({
        next: (res) => {
          console.log("hey")
          console.log(res['username']);
          console.log(res['confirm_password'])
          alert("registration done!!!")
          this.router.navigate(['/studentlogin']);   
        },
        error: (e) => console.error(e)
      });
  }
  GetstuDetails() 
  {  
    console.log(this.l)
    this.employeeService.getusername().subscribe((data: any) => {  
      this.l = data; 
      console.log(typeof(this.l))
      console.log(this.l)
    }); 
  }
  valid():boolean{
    let s=this.username.value
    for(let i = 0; i <this. l.length; i++)
    { 
      console.log(typeof(s),typeof(this.l[i]['user_id__username']))
      if(s==this.l[i]['user_id__username'])
      {
        console.log("true")
        this.alert=true;
        console.log(this.username)
      }
    }
    if(this.alert){
      console.log("working")
      this.alert=false
      return true
    }
    else{
      console.log("notworking")
      return false
    }
    
  }
  match():boolean{
   let p=this.password.value
   let c=this.confirm_password.value
   console.log(this.password.value)
   console.log(this.confirm_password.value)
   if(p!=c){
    console.log("true")
    this.count=this.count+1
    return true
   }
   else{
    this.count=this.count-1;
    return false
   }


  }

}
