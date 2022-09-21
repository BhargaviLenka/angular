import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BooksComponent } from './components/books/books.component';
import { IssuedBooksComponent } from './components/issued-books/issued-books.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { DelBookComponent } from './components/books/del-book/del-book.component';
import { DelIssueComponent } from './components/issued-books/del-issue/del-issue.component';
import { RegisterComponent } from './components/studentt/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/studentt/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { StuloginComponent } from './components/studentt/stulogin/stulogin.component';
import { StudenttComponent } from './components/studentt/studentt.component';
import { StunavbarComponent } from './components/stunavbar/stunavbar.component';
import { ProfileComponent } from './components/studentt/profile/profile.component';
import { NavComponent } from './components/admin/nav/nav.component';
import { HistoryComponent } from './components/studentt/history/history.component';
import { IssueComponent } from './issue/issue.component';
import { ChangepassComponent } from './components/studentt/changepass/changepass.component';
import { EditprofileComponent } from './components/studentt/editprofile/editprofile.component';
import { DeletestudentComponent } from './components/admin/deletestudent/deletestudent.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './chart/chart.component';
import { DeletebookComponent } from './components/books/deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    StudenttComponent,
    IssuedBooksComponent,
    AddBookComponent,
    DelBookComponent,
    DelIssueComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    StuloginComponent,
    StunavbarComponent,
    ProfileComponent,
    NavComponent,
    HistoryComponent,
    IssueComponent,
    ChangepassComponent,
    EditprofileComponent,
    DeletestudentComponent,
    ChartComponent,
    DeletebookComponent,


  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule ,
    AngularMaterialModule, 
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
