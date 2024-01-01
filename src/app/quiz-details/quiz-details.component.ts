import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../services/quiz/quiz.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit{

  quizId:string|null;
  quiz:Quiz;
  constructor(private quizService:QuizService , private router:Router)
  {
    
  }
  
  ngOnInit()
  {
    this.quizId=this.router.routerState.snapshot.root.queryParamMap.get("id");
    
    if(this.quizId)
    this.quizService.getQuizById(this.quizId).subscribe((val)=>{
      this.quiz=val;
    })
    
    
  }
}
