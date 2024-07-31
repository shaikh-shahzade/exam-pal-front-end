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
import { ErrorPageComponent } from './commons/error-page/error-page.component';
import { UserProfileComponent } from './dashboard/user-dashboard/user-profile/user-profile.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { QuizAttemptComponent } from './dashboard/quiz-attempt/quiz-attempt.component';
import { StartPageComponent } from './dashboard/quiz-attempt/start-page/start-page.component';
import { SolveQuizComponent } from './dashboard/quiz-attempt/solve-quiz/solve-quiz.component';
import { EditQuizComponent } from './dashboard/admin-dashboard/manage-quizes/edit-quiz/edit-quiz.component';
import { QuizResultComponent } from './dashboard/quiz-attempt/quiz-result/quiz-result.component';

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
  },
  {
    path:"quiz/details",
    component:QuizDetailsComponent
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
    path:"quiz",
    component:QuizAttemptComponent,
    children:[
      {
        path:"start",
        component:StartPageComponent
      },
      {
        path:"solve",
        component:SolveQuizComponent
      },
      {
        path:"result/:id",
        component:QuizResultComponent,
        pathMatch:'prefix'
      }
    ]

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
      component:UserProfileComponent
    },
    {
      path:"dashboard",
      component:UserProfileComponent
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
      path:"quiz/edit",
      component:EditQuizComponent
    },
    {
      path:"quizes",
      component:ManageQuizesComponent,
      
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
