import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../services/quiz/quiz.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Result } from '../model/result.model';
import { QuizAttempt } from '../model/quiz-attempt.model';
import { ApiUtilityService } from '../services/api-utility/api-utility.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements AfterViewInit{

  quizId:string|null;
  quiz:Quiz;
  quizAttempts:Observable< QuizAttempt[]>;
q: any;
  constructor(private quizService:QuizService,
     private router:Router,
     private apiUtil:ApiUtilityService
    )
  {}
  ngAfterViewInit(): void {
    this.quizId=this.router.routerState.snapshot.root.queryParamMap.get("id");
    
    if(this.quizId)
      {
        this.quizService.getQuizById(this.quizId).subscribe((val)=>{
          this.quiz=val;
        })
        this.quizAttempts = this.apiUtil.getAttemptsByQuiz(this.quizId)

        
      }
  }
  
}
