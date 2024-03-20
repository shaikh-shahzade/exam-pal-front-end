import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-manage-quizes',
  templateUrl: './manage-quizes.component.html',
  styleUrls: ['./manage-quizes.component.css']
})
export class ManageQuizesComponent implements AfterViewInit , OnInit , AfterContentInit{

  quizes:Observable<Quiz[]>;
  constructor(private quiz_service:QuizService,
    private quizActiveSerive:ActiveQuizService,
    private router:Router) {
    
  }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.quizes = this.quiz_service.getQuizByHost();
  }
  editQuiz(quiz:Quiz)
  {
    this.quizActiveSerive.quiz=quiz;
    this.router.navigate(["/admin/quiz/edit"])
  }
}
