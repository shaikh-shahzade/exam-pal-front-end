import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';

@Component({
  selector: 'app-assign-exams',
  templateUrl: './assign-exams.component.html',
  styleUrls: ['./assign-exams.component.css']
})
export class AssignExamsComponent {

  @Input() quiz:Quiz;
  @Output() startQuiz = new EventEmitter<Quiz>();

  start()
  {
    this.startQuiz.emit(this.quiz);
  }
}
