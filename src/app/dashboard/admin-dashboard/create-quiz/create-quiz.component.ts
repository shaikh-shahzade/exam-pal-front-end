import { Component } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {

  quiz:Quiz = new Quiz;

  constructor(private quizService:QuizService)
  {

  }
  createQuiz()
  {
    this.quizService.createNewQuiz(this.quiz);
    
  }
  
}
