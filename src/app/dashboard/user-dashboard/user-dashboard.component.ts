import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  quizes:Quiz[];
  constructor(private quizService:QuizService, private router:Router)
  {

  }
ngOnInit()
{
    this.quizService.retrieveQuizes().subscribe((val)=>{this.quizes=val});
}
quizstart(val: Quiz) {
  console.log(val)
  let queryP={id:val.qid}
  this.router.navigate(['quiz/details'],{queryParams:queryP})
}

}
