import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../model/quiz.model';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css'],
})
export class QuizCardComponent {
  @Input() quiz: Quiz;
  @Output() startQuiz = new EventEmitter<Quiz>();

  start() {
    this.startQuiz.emit(this.quiz);
  }
}
