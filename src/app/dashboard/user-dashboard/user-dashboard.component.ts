import { Component } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  quizes:Quiz[];
  constructor(private quizService:QuizService)
  {

  }
ngOnInit()
{
    this.quizService.retrieveQuizes().subscribe((val)=>{this.quizes=val});
}
quizstart(val: String) {
  console.log(val)
}

}
