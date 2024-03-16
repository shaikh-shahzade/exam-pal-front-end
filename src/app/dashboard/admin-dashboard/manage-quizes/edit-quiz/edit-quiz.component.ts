import { AfterViewInit, Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements AfterViewInit {
  active_quiz:Observable<Quiz>;
  
  constructor(private quiz_active_service:ActiveQuizService)
  {

  }
  ngAfterViewInit(): void {
    this.active_quiz = this.quiz_active_service.quiz;
  }
}
