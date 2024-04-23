import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttemptedQuestion } from 'src/app/model/attempted-question.model';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit{
  
  @Input() question:Question;
  @Input() questionAttempt:AttemptedQuestion;

  
  ngOnInit(): void {
    console.log(this.question)
  }

  
  

}
