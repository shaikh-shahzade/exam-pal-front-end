import { Component, OnInit } from '@angular/core';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { SolveService } from 'src/app/services/solve/solve.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit{
quizId:String;
constructor(
  private solveService:SolveService,
  private activeQuiz:ActiveQuizService
){}
  ngOnInit(): void {
    this.quizId = `${this.activeQuiz.quiz.qid}`;
  }


}
