import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  createNewQuiz(quiz:Quiz)
  {
    console.log(quiz);
  }
}
