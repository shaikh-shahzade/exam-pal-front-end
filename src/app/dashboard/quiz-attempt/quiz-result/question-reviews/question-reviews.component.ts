import { Component, Input } from '@angular/core';
import { AttemptedQuestion } from 'src/app/model/attempted-question.model';

@Component({
  selector: 'app-question-reviews',
  templateUrl: './question-reviews.component.html',
  styleUrls: ['./question-reviews.component.css']
})
export class QuestionReviewsComponent {

  @Input() attemptedAquestion:AttemptedQuestion;
  @Input() index:number;
}
