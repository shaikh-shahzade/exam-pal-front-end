import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginService } from './services/login/login.service';
import { LocalStorageService } from './services/LocalStorage/local-storage.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs'
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateQuizComponent } from './dashboard/admin-dashboard/create-quiz/create-quiz.component';
import { ProfilePageComponent } from './dashboard/admin-dashboard/profile-page/profile-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { ShowUsersComponent } from './dashboard/admin-dashboard/show-users/show-users.component';
import { ManageQuizesComponent } from './dashboard/admin-dashboard/manage-quizes/manage-quizes.component';
import { AssignExamsComponent } from './dashboard/admin-dashboard/assign-exams/assign-exams.component';
import { ResultsComponent } from './dashboard/admin-dashboard/results/results.component';
import { QuizService } from './services/quiz/quiz.service';
import { SignupService } from './services/signup/signup.service';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowToComponent } from './how-to/how-to.component';
import { ErrorPageComponent } from './commons/error-page/error-page.component';
import { UserProfileComponent } from './dashboard/user-dashboard/user-profile/user-profile.component';
import { QuizCardComponent } from './commons/quiz-card/quiz-card.component';
import { QuizDetailsComponent } from './commons/quiz-details/quiz-details.component';
import { QuizAttemptComponent } from './dashboard/quiz-attempt/quiz-attempt.component';
import { StartPageComponent } from './dashboard/quiz-attempt/start-page/start-page.component';
import { SolveQuizComponent } from './dashboard/quiz-attempt/solve-quiz/solve-quiz.component';
import { SolveService } from './services/solve/solve.service';
import { QuestionFormComponent } from './dashboard/quiz-attempt/solve-quiz/question-form/question-form.component';
import { ActiveQuizService } from './services/active-quiz/active-quiz.service';
import { EditQuizComponent } from './dashboard/admin-dashboard/manage-quizes/edit-quiz/edit-quiz.component';
import { QuizAttemptTableComponent } from './dashboard/quiz-attempt/quiz-attempt-table/quiz-attempt-table.component';
import { QuizResultComponent } from './dashboard/quiz-attempt/quiz-result/quiz-result.component';
import { QuestionReviewsComponent } from './dashboard/quiz-attempt/quiz-result/question-reviews/question-reviews.component';
import { TempHandlerComponent } from './commons/temp-handler/temp-handler.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    QuizComponent,
    CreateQuizComponent,
    ProfilePageComponent,
    ShowUsersComponent,
    ManageQuizesComponent,
    AssignExamsComponent,
    ResultsComponent,
    AboutUsComponent,
    HowToComponent,
    ErrorPageComponent,
    UserProfileComponent,
    QuizCardComponent,
    QuizDetailsComponent,
    QuizAttemptComponent,
    StartPageComponent,
    SolveQuizComponent,
    QuestionFormComponent,
    EditQuizComponent,
    QuizAttemptTableComponent,
    QuizResultComponent,
    QuestionReviewsComponent,
    TempHandlerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    SweetAlert2Module,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
    



    
  ],
  providers: [
    LoginService ,
    LocalStorageService ,
    QuizService ,
    SignupService,
    SolveService,
    ActiveQuizService,
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:AuthInterceptorService,
      
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
