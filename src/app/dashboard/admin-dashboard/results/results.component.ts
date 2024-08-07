import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuizAttempt } from 'src/app/model/quiz-attempt.model';
import { ApiUtilityService } from 'src/app/services/api-utility/api-utility.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  quizAttempts:QuizAttempt[];
  constructor(private apiService:ApiUtilityService)
  {}
  ngOnInit(): void {
    this.apiService.getAttemptsByHost().subscribe(val=>{
      this.quizAttempts=val
    });
  }
  ngAfterViewInit(): void {
    


  }

}
