import { Component } from '@angular/core';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { SolveService } from 'src/app/services/solve/solve.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {

constructor(private solveService:SolveService){}

startQuiz(quizId:number)
{
  let quizAttempt:QuizAttempt = new QuizAttempt;
  quizAttempt.status="Started"
  quizAttempt.date = Time

  this.solveService.startQuiz()
}

}
