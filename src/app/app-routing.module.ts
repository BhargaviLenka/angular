import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/studentt/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/studentt/login/login.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { IssuedBooksComponent } from './components/issued-books/issued-books.component';
import { BooksComponent } from './components/books/books.component';
import { DelIssueComponent } from './components/issued-books/del-issue/del-issue.component';
import { StudenttComponent } from './components/studentt/studentt.component';
import { StuloginComponent } from './components/studentt/stulogin/stulogin.component';
import { StunavbarComponent } from './components/stunavbar/stunavbar.component';
import { ProfileComponent } from './components/studentt/profile/profile.component';
import { NavComponent } from './components/admin/nav/nav.component';
import { IssueComponent } from './issue/issue.component';
import { HistoryComponent } from './components/studentt/history/history.component';
import { ChangepassComponent } from './components/studentt/changepass/changepass.component';
import { EditprofileComponent } from './components/studentt/editprofile/editprofile.component';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'adminlogin',
    component:AdminComponent,
    
  },
  {
    path:'studentlogin',
    component:StuloginComponent
  },
  {
    path:'adminloginn',
    component:NavComponent,
    children:[
      {
        path:'viewstu',
        component:StudenttComponent,
        canActivate:[AuthGuard]
        
      },
      {
        path:"viewissue",
        component:IssuedBooksComponent,
        canActivate:[AuthGuard]
      },
      {
        path:"viewbooks",
        component:BooksComponent,
        canActivate:[AuthGuard]
  
      },
      {
        path:"addbook",
        component:AddBookComponent,
        canActivate:[AuthGuard]
   
      },
      {
        path:"issuebook",
        component:IssueComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'deletestudent',
        component:StudenttComponent,
        canActivate:[AuthGuard]
      
      },
      {
        path:'chart',
        component:ChartComponent,
        canActivate:[AuthGuard]
        
      }
    ]
    
  },
  {
    path:'viewstu',
    component:StudenttComponent
  },
  {
    path:'stuloginn',
    component:StunavbarComponent,
    children:[
      {
        path:'changepass',
        component:ChangepassComponent
      },
      {
        path:"editprofile",
        component:EditprofileComponent
      },
      {
        path:"History",
        component:HistoryComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
