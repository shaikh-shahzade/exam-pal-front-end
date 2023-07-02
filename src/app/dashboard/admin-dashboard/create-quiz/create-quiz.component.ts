import { Component } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {

  quiz:Quiz = new Quiz;

  createQuiz()
  {
    console.log(this.quiz);
  }
  
}
