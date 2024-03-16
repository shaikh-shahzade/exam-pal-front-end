import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {

  quiz:Quiz = new Quiz;

  constructor(private quizService:QuizService,
     private router:Router,
     private active_quiz:ActiveQuizService
     )
  {

  }
  createQuiz()
  {
    
    this.active_quiz.quiz = this.quizService.createNewQuiz(this.quiz);
    this.active_quiz.quiz.subscribe({complete: ()=> {
      this.router.navigate(["/admin/quiz/edit"]);
    }})
    
     
  }
  
}
