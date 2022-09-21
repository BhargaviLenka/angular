import { Injectable } from '@angular/core';
import { Router, CanActivate,  } from '@angular/router';
import { BookserviceService } from './services/bookservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private bookservice:BookserviceService,private router:Router){}
  canActivate():boolean {
    if(this.bookservice.loggedin())
    {
      return true;
    }
    else{
      this.router.navigate(['/adminlogin'])
      return false;
    }
  }
  
}
