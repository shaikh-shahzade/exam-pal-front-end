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
import { AssignExamsComponent } from './dashboard/admin-dashboard/assign-exams/assign-exams.component';
import { ResultsComponent } from './dashboard/admin-dashboard/results/results.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowToComponent } from './how-to/how-to.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"aboutus",
    component:AboutUsComponent
  },
  {
    path:"how",
    component:HowToComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"password/reset",
    component:HomeComponent
  }
  ,{
    path:"signup",
    component:SignupComponent
  },
  {
    path:"quizes",
    component:QuizComponent
  },
  {
    path:"user",
    component:DashboardComponent ,
    children:[
      {
      path:"",
      component:UserDashboardComponent
    },
    {
      path:"profile",
      component:ProfilePageComponent
    }
  ]
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
    },
    {
      path:"assign",
      component:AssignExamsComponent
    },
    {
      path:"results",
      component:ResultsComponent
    }
  ]
  
  },
  {
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
