import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent {

  @Input() cardTitle:String;
  @Input() cardSubTitle:String;
  @Input() cardDescription:String;
  

}
