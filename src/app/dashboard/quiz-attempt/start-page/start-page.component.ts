import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { SolveService } from 'src/app/services/solve/solve.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit{
quizId:String|null;
constructor(
  private solveService:SolveService,
  private activeQuiz:ActiveQuizService,
  private router:Router,
  private quizService:QuizService
){}
  ngOnInit(): void {
    this.quizId = `${this.activeQuiz.quiz.qid}`;
    this.quizId = this.router.routerState.snapshot.root.paramMap.get("user")
  }


}
