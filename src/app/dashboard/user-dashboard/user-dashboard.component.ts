import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { ActiveQuizService } from 'src/app/services/active-quiz/active-quiz.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  quizes:Quiz[];
  constructor(private quizService:QuizService, private router:Router,private activeQuiz:ActiveQuizService)
  {

  }
ngOnInit()
{
    this.quizService.retrieveQuizes().subscribe((val)=>{
      this.quizes=val;
    });
}
quizstart(val: Quiz) {
  
  this.activeQuiz.quiz=val;
  this.router.navigate(['quiz/details'])
}

}
