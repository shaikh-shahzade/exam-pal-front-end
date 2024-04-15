import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

  
  @Input() question:Question;
}
