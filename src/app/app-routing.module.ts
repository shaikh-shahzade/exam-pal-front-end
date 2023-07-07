import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { CreateQuizComponent } from './dashboard/admin-dashboard/create-quiz/create-quiz.component';
import { ProfilePageComponent } from './dashboard/admin-dashboard/profile-page/profile-page.component';
import { ShowUsersComponent } from './dashboard/admin-dashboard/show-users/show-users.component';
import { ManageQuizesComponent } from './dashboard/admin-dashboard/manage-quizes/manage-quizes.component';

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
    component:AdminDashboardComponent,
    children:[
    {
      path:"create",
      component:CreateQuizComponent
    },
    {
      path:"profile",
      component:ProfilePageComponent
    },
    {
      path:"users",
      component:ShowUsersComponent
    },
    {
      path:"quizes",
      component:ManageQuizesComponent
    }
  ]
  }]
  },
  {
    path:"quiz",
    component:QuizComponent
  }
  ,
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
