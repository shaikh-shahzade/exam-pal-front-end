import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  }
  ,
  {
    path:"login",
    component:LoginComponent
  }
  ,{
    path:"signup",
    component:SignupComponent
  },
  {
    path:"user",
    component:DashboardComponent ,
    children:[{
      path:"",
      component:UserDashboardComponent
    },
  {
    path:"admin",
    component:AdminDashboardComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
