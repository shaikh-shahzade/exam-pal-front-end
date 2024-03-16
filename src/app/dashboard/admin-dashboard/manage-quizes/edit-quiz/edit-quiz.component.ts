import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements AfterViewInit {
  quiz:Observable<Quiz[]>;
  constructor(private quiz_service:QuizService)
  {

  }
  ngAfterViewInit(): void {
    this.quiz = this.quiz_service.getQuizByHost()
  }
}
